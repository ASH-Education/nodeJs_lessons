// event loop this is a part of libuv
// link in libuv => "https://docs.libuv.org/en/v1.x/loop.html"

/* information =>>
Since most modern kernels are multi-threaded,
Each phase has a first in first out(FIFO) queue of callbacks to execute,


==>> Phases Overview <<==
timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
*/