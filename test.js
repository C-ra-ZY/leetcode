var request = require("request");
var config = require("./config");
config.app = "leetcode";
config.init()
let user = {login: "ayang879@gmail.com", password: "github901103"};
test(user, () => {
  console.log("it callback");
});
function test(user, cb) {
  const urls = config.sys.urls;
  const leetcodeUrl = urls.github_login;
  const _request = request.defaults({jar: true});
  _request(urls.github_login_request, function (e, resp, body) {
    const authenticityToken = body.match(
      /name="authenticity_token" value="(.*?)"/
    );
    if (authenticityToken === null) {
      return cb("Get GitHub token failed");
    }
    const options = {
      url: urls.github_session_request,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      followAllRedirects: true,
      form: {
        login: user.login,
        password: user.pass,
        authenticity_token: authenticityToken[1],
        utf8: encodeURIComponent("✓"),
        commit: encodeURIComponent("Sign in"),
      },
    };
    _request(options, function (e, resp, body) {
      if (resp.statusCode !== 200) {
        return cb("GitHub login failed");
      }
      if (resp.request.uri.href !== urls.github_tf_redirect) {
        return requestLeetcodeAndSave(_request, leetcodeUrl, user, cb);
      }
      prompt.colors = false;
      prompt.message = "";
      prompt.start();
      prompt.get(
        [
          {
            name: "twoFactorCode",
            required: true,
          },
        ],
        function (e, result) {
          if (e) return log.fail(e);
          const authenticityTokenTwoFactor = body.match(
            /name="authenticity_token" value="(.*?)"/
          );
          if (authenticityTokenTwoFactor === null) {
            return cb("Get GitHub two-factor token failed");
          }
          const optionsTwoFactor = {
            url: urls.github_tf_session_request,
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            followAllRedirects: true,
            form: {
              otp: result.twoFactorCode,
              authenticity_token: authenticityTokenTwoFactor[1],
              utf8: encodeURIComponent("✓"),
            },
          };
          _request(optionsTwoFactor, function (e, resp, body) {
            if (resp.request.uri.href === urls.github_tf_session_request) {
              return cb("Invalid two-factor code please check");
            }
            requestLeetcodeAndSave(_request, leetcodeUrl, user, cb);
          });
        }
      );
    });
  });
}
