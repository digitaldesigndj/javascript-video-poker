# Poker

A Simple poker game

## Developers

I have replace the old DocPad requirement of the project with Grunt. Check out the [Gruntfile](Gruntfile.coffee) for the latest details. 

	grunt watch

Use this task to start up the devlopment environment. Files from `src/` are compiled and output to the `out/` directory. I always use a web server for devlopment, but it's not a strict requirement.

	grunt export

This task will output an optimized final version of the application to the `prod/` directory. The livereload include is automatically stripped from the production version of the application.


## Keyboard Controls

`Enter` to deal/start game, `1-5` to hold.

## Options

There's a panel at the bottom of the inteface you can open. You can activate a score popup feature with this panel.

## License

&copy; 2013-2014 Taylor Young

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The permission notice below shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. [PLUR](http://en.wikipedia.org/wiki/PLUR).
