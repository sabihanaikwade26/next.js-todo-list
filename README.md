# nextjs-todo

A simple TODO app written in React using Next.js.



## Development

1. Fork/Clone

2. Install the dependencies:

    ```sh
    $ npm install
    ```

3. Run the server:

    ```sh
    $ npm run dev
    ```

4. Navigate to [http://localhost:3000/](http://localhost:3000/) in your favorite web browser.

## Deploy (Docker)

1. Install Docker (if you don't have it yet).

2. Build and tag the image:
    ```sh
    $ docker build -t nextjs-todo:1.0 .
    ```

3. Start a new container:
   ```sh
    $ docker run -it -p 3000:3000 -d nextjs-todo:1.0
    ```

4. Navigate to [http://localhost:3000/](http://localhost:3000/) in your favorite web browser.
