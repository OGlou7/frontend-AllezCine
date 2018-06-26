/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","c6b39ef550691c1887a81e65d009baf8"],["app.js","30e836450ada9e0f0a6773582d6731d7"],["img/Banner_Ocean8.png","d34a0ffebaccc271eacb8aac08bd46f4"],["img/Codesource-2011-scifi.jpg","8819dac59e05498d8963375858bb8dc0"],["img/I,DanielBlake-2016-drama.jpg","532bbd05830caa4eaa4521a4cce00db8"],["img/ImitationGame-2014.jpg","22df61a6d1c315470f6456013a6ddd83"],["img/Kin-2018-scifi.jpg","9111a7e039cdac029015b5ae23e6ba2e"],["img/Lacitédelapeur-1994-comedy.jpg","ebd2b87de133c9d680d6040af45c7a6d"],["img/Storks-2016-comedy.jpg","21f6b5666bb18b9aaee4e3f0715aad47"],["img/Survivestyle5-2004-comedie.jpg","97edeb2d3e2b40661b18553cf0d6fc4d"],["img/T2trainspotting-2017-comedy.jpg","1ca74fc484292d533185b2f555d20657"],["img/Themartian-2016-scifi.jpg","24b1aad56895beb2cba01325ecfea1b4"],["img/WhatWeDoInTheShadows-2014-comedie.jpg","6512240b87a4344693468d5a14605b82"],["img/avengers-2018-scifi.jpg","72ff4eefa1f3849b5d0f5bbbb1cb7b7d"],["img/banner_blackkklansman_2018.jpg","112a02414d747afd3c81e6d2993f436d"],["img/banner_kin2018.jpg","b982174e5fd0bf416d62b0b4fb4ec4b0"],["img/blacKkKlansmaan-2018-comedy.jpg","64a701230a9b2f1392ce18a204b11d69"],["img/bladerunner-2017-scifi.jpg","80d929f25aa004d197184dbc1e8aa14b"],["img/borat-2006-comedy.jpg","837eb9f6f126e9ecfbc2e87c7ff56d6b"],["img/brazil-1985-scifi.jpg","a2464acaab2e3ffe6c011a9f38db1c6b"],["img/cloudatlas-2013-action.jpg","224f5199eb6c3bbac8bc2dd415b60b55"],["img/dontget-2018-comedy.jpg","19b00b1777b7d8f454905ead9e1d1b07"],["img/eightgrade-2018-comedy.jpg","38b391e7613914cc7163c3a7a1013995"],["img/eldorado-2008-comedy.jpg","565df910673238867dc6322ac4831046"],["img/her-2013-comedy.jpg","467f01c375cff820d03b570c1ae20c37"],["img/hostel-2005-thriller.jpg","4092dbe4315b20992097b982b38b0039"],["img/inception-2010-scifi.jpg","b00e2d3519f9cc45f227f9c093216f4a"],["img/intothewild-2007-action.jpg","12c5c5ac69850d105166729cd8436ab6"],["img/intouchables-2011-comedie.jpg","24b070e4a3892e70f8c7c72bfbd0c373"],["img/layercake-2004-action.jpg","b02df0756697d7a54f1769bf25fe59e9"],["img/lepatientanglais-1996-dramatique.jpg","c8e1aba8cf5a45d9c61d10289dfeca37"],["img/lesdeuxtours-2002-aventure.jpg","4b8303791d13712bc609d72b99bc55a6"],["img/matrix-1999-scifi.jpg","700e9ec51cbf690f1589945ce78e0f45"],["img/ocean8-2018-action.jpg","39c6d09f2e5b6e81a8d471fdb8163846"],["img/okja-2017-action.jpg","f9d8b923a6c5dbc1fe8da7765b190dd3"],["img/rushmore-1998-comedy.jpg","4a8828beeaa7bff7eaf0c5d813915067"],["img/shutterisland-2010-thriller.jpg","41e9ea989d6762418af0be1c8c7fbc2c"],["img/solo-2018-scifi.jpg","8954beb3ce988a2b2146104fcd75d851"],["img/starwarsempire-1980-scifi.jpg","25027a3ad79e302efd1aa3cc5885dc89"],["img/swissarmyman-2016-comedie.jpg","7fdf4b66260e4eecc94c9bc0cda512ae"],["img/tag-2018-comedy.jpg","536f8bd366e715f5bac62128018820d1"],["img/taken-2008.jpg","0f1550bd6674d7d7ab8f7c970867371c"],["img/thelobster-2005-comedy.jpg","f1ab980f3c25d6e6bf698a808878f79e"],["img/thesquare-2017.jpg","b23361ab2318ecf9290a29889e7c3eef"],["img/tv-arrow-2014-action.jpg","f05a466937b7615b37e3b993f6569725"],["img/tv-blackmirror-scifi.jpg","0f2ec08f668191a424d93794799c2baa"],["img/tv-breakingbad-2008-action.jpg","05f27a82721e14daeb08522afa2114ed"],["img/tv-fargo-2010-action.jpg","a35701849d6cbd24dfc7a3529cbafc30"],["img/tv-got-2010-action.jpg","69a3b06be179c4765cd3ceeeb9210074"],["img/tv-humans-2015-scifi.jpg","807458c97e4370730242fa20b716db33"],["img/tv-lacasadepapel-2017-action.jpg","32f13737cd7421ea8b9f29313caacb53"],["img/tv-misfits-2009-comedy.jpg","e3f180a76fa226cb3c4db7e400bf6b51"],["img/tv-rickmorty-2013-comedy.jpg","e1a7b9aae7334175aea6d6bd021bd8f8"],["img/tv-sense8-2017-scifi.jpg","63019beca3cc89aa95dd0ddb107e24d7"],["img/tv-sherlock-2010-action.jpg","8721fb27a367f784665b5e194724f9b0"],["img/tv-strangerthings-2017-action.jpg","33873f9f75ab3a8c61d6ef3635284527"],["img/tv-theendofthefuckingworld-2017-comedy.jpg","3724e037301fd866e2160513e75e7446"],["img/tv-theitcrowd-2008-comedy.jpg","9aac5111b8afc1fae04976c416f09aa7"],["img/tv-theoa-2016-scifi.jpg","12f575b53bfbdca3229cbad84e18fad1"],["img/tv-theoffice-2005-comedy.jpg","4251ef1ba0902f92a4e749c5878f4c56"],["img/tv-utopia-2014-scifi.jpg","e9f031f921d871c79610e9787d1c04d9"],["img/tv-westworld-2016-scifi.jpg","773e877063741f69812a546507a33284"],["img/zoolander-2001-comedie.jpg","99b2a248def578839b837d7adad93b21"],["index.html","b0c5ac5bd0df6ffbbe02bffcbbe5c832"],["manifest.json","38c8788a06cf1bdaa9ae559059b24447"],["script.js","99c4d1d527e897ceda5fecae4f9ef30b"],["style.css","785680ab3f2e22ffedca39edd27f8b74"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







