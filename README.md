# umd-iiif-viewer

UMD Libraries' [Mirador 4]-based [IIIF] image viewer

## Requires

* NodeJS 24+

## Development Setup

```zsh
git clone git@github.com:umd-lib/umd-iiif-viewer.git
cd umd-iiif-viewer
npm install
npm run dev
```

The umd-iiif-viewer application will now be running in development mode (with
automatic reload on code changes) at <http://localhost:5173>.

## Static Build

```zsh
npm run build
```

Static build files with be written to the `dist` directory.

## Docker Image

```zsh
docker build -t docker.lib.umd.edu/iiif-viewer .

docker run -it --rm -p 8888:80 docker.lib.umd.edu/iiif-viewer
```

The application will be at <http://localhost:8888/>

The final Docker image is based on the [Static Web Server] (SWS)
[Docker image](https://static-web-server.net/features/docker/).

## API

The umd-iiif-viewer accepts three query parameters:

* **`manifest`** The URI of the [IIIF] manifest to load
* **`q`** Initial query for the content search within the loaded manifest
* **`n`** Canvas index to display first; note that this is a 0-based index, so
  the first page will actually be `n=0`

Assuming the application is deployed at <http://localhost:8888/viewer/>,
here are some example URLs demonstrating these parameters:

* Display the manifest at <http://iiif.example.com/manifest/123>:
  * <http://localhost:8888/viewer/?manifest=http://iiif.example.com/manifest/123>

* Display the manifest at <http://iiif.example.com/manifest/123> and initialize
a content search for "university":
  * <http://localhost:8888/viewer/?manifest=http://iiif.example.com/manifest/123&q=university>

* Display the manifest at <http://iiif.example.com/manifest/123> and open to the
third canvas:
  * <http://localhost:8888/viewer/?manifest=http://iiif.example.com/manifest/123&n=2>

Additionally, if no `manifest` parameter is given, the application will display
a simple web form that can be interactively filled out with the above parameters.

## License

Apache-2.0

See the [LICENSE](LICENSE) file for license rights and limitations.

[Mirador 4]: https://projectmirador.org/
[IIIF]: https://iiif.io/
[Static Web Server]: https://static-web-server.net/
