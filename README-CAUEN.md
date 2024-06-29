## Start development

https://www.chatwoot.com/docs/contributing-guide/environment-setup/make

docker run --name my-redis -p 6379:6379 -d redis

make run

url: http://localhost:3000
user_name: john@acme.inc
password: Password1!

## Creating conversation

add widget inbox and execute code locally

(function(d,t) {
  var BASE_URL="http://localhost:3000";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken: 'Lwbb6Jbie7EoKtVeSt1gsDbQ',
      baseUrl: BASE_URL
    })
  }
})(document,"script");

## Deploying

docker build -t chatwoot/chatwoot:latest -t chatwoot/chatwoot:3.10.2-custom -f ./docker/Dockerfile .
docker push cauedocker/chatwoot --all-tags