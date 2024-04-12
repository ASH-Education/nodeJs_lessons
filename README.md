<h1>node js lessons</h1>

> node tools module

<table>
  <th>
    <td>Name</td>
    <td>Use case</td>
    <td>install</td>
  </th>
  <tbody>
    <tr>
      <td>#1</td>
      <td>nodemon</td>
      <td>make live server in command</td>
      <td>https://www.npmjs.com/package/nodemon</td>
    </tr>
    <tr>
      <td>#2</td>
      <td>inquirer</td>
      <td>A collection of common interactive command line user interfaces.</td>
      <td>https://www.npmjs.com/package/inquirer</td>
    </tr>
    <tr>
      <td>#3</td>
      <td>commander</td>
      <td>The complete solution for node.js command-line interfaces.</td>
      <td>https://www.npmjs.com/package/commander</td>
    </tr>
    <tr>
      <td>#4</td>
      <td>thread pool</td>
      <td> used to run all file system operations</td>
      <td>https://docs.libuv.org/en/v1.x/threadpool.html</td>
    </tr>
        <tr>
      <td>#5</td>
      <td>exposrt and Import</td>
      <td>can use any function from file to defrent file</td>
    </tr>
    <tr>
      <td>#6</td>
      <td>fs module</td>
      <td>work on files system and write, remove and viwe on documents</td>
    </tr>
  </tbody>
</table>

> node frame works

<table>
  <th>
    <td>Name</td>
    <td>install</td>
  </th>
  <tbody>
    <tr>
      <td>#1</td>
      <td>express</td>
      <td>https://expressjs.com</td>
    </tr>
    <tr>
      <td>#2</td>
      <td>Koa</td>
      <td>https://koajs.com</td>
    </tr>
    <tr>
      <td>#3</td>
      <td>nest</td>
      <td>https://nestjs.com</td>
    </tr>
    <tr>
      <td>#4</td>
      <td>Hapi</td>
      <td>https://hapi.dev</td>
    </tr>
    <tr>
      <td>#5</td>
      <td>Meteor</td>
      <td>https://www.meteor.com</td>
    </tr>
    <tr>
      <td>#5</td>
      <td>https://sailsjs.com</td>
    </tr>
  </tbody>
</table>

###

> libuv Design
> ![architecture](https://github.com/ASH-Education/nodeJs_lessons/assets/124946844/4b8b6661-fd3f-4c8e-8ed0-3ace7b000a7b)

<h1>It is divided into two parts</h1>

<h3>First Division is network i/o >> hanel in os kernal</h3>

> "About http request"

- epoll on Linux
- kqueue on OSX and other BSDs
- event ports on SunOS
- IOCP on Windows

  > kernel

<table>
  <th>
    <td>vedio</td>
    <td>link</td>
  </th>
  <tbody>
    <tr>
      <td>#1</td>
      <td>operating system kernel</td>
      <td>https://youtu.be/Ujd3zy2M2M4?si=0S5tyr8CdABL4Z9_</td>
    </tr>
  </tbody>
</table>

  > status code

<table>
  <th>
    <td>code</td>
    <td>information</td>
    <td>more</td>
  </th>
  <tbody>
    <tr>
      <td>#1</td>
      <td>100 - 199</td>
      <td>Informational responses</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses</td>
    </tr>
    <tr>
      <td>#2</td>
      <td>200 - 299</td>
      <td>Successful responses</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses</td>
    </tr>
    <tr>
      <td>#3</td>
      <td>300 - 399</td>
      <td>Redirection messages</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages</td>
    </tr>
    <tr>
      <td>#4</td>
      <td>400 - 499</td>
      <td>Client error responses</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses</td>
    </tr>
    <tr>
      <td>#5</td>
      <td>500 - 599</td>
      <td>Server error responses</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses</td>
    </tr>
  </tbody>
</table>
