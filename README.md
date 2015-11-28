### Introduction to webpack
------
Using webpack to package your web apps for production

![](webpack.png)

https://github.com/webpack

------
github.com/vmlf01




### what is webpack?
------
- module bundler

- transforms javascript modules with dependencies into static assets

- created by Tobias Koppers aka @sokra, Germany, sometime around 2012
- 1.0.0 released 19 Feb 2014



![](what-is-webpack.png)



### motivation
------
- better support for big single page applications using code splitting
- takes advantage of split points to divide assets into chunks that are loaded on demand

- we define the split points in code
- webpack takes care of chunking and loading



but...

that's for another presentation

:(

this one is just an introduction




### main contents
------
- bundler (npm install devpack)
- development web server (npm install devpack-dev-server)
  - serves static files and bundle
  - supports hot module replacement
  - page reload when that is not possible





### architecture
------




sources + dependencies -> loaders -> modules -> compilation + plug-ins -> chunks

  - sources/dependencies
    - supports CommonJS, AMD, ES6, CSS, Coffeescript, Images, LESS, etc.
  - loaders
    - used to pre-process files
      - exports
      - script
      - cofee, babel, etc.
      - file
      - url
      - css
      - style
      - html
      - indexhtml
  - modules
    - isolated scope, no unwanted global polution
  - plug-ins
    - register to run on compiler pipeline events (run, make, emit, failed, etc.)
  - assets
    - emited by the compilation process
  - chunks/entry-points
    - final artifacts of the bundler


### settings and configuration
------
- CLI/inline
- webpack.config.js




### samples
------
## simple static site




### samples
------
## static site with src/dist folders




###samples
------
## angular.js site




### links
------
- https://github.com/webpack
- https://github.com/petehunt/webpack-howto
- http://dontkry.com/posts/code/single-page-modules-with-webpack.html




#questions?
