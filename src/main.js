import Mirador from 'mirador'

const params = new URLSearchParams(window.location.search)
const manifestURI = params.get('manifest')
const index = Number.parseInt(params.get('n'))
const query = params.get('q')

if (manifestURI) {
  document.getElementById('app').innerHTML = '<p>Loading...</p>'
  const miradorConfig = {
    // id selector where Mirador should be instantiated
    id: 'app',
    window: {
      // prevent the user from closing this window
      allowClose: false,
      allowMaximize: false,
      defaultSideBarPanel: 'info',
      // draw annotations even if we are not on the annotation panel
      forceDrawAnnotations: true,
      highlightAllAnnotations: true,
      // Configure which panels are visible in WindowSideBarButtons
      panels: {
        info: true,
        attribution: true,
        canvas: true,
        annotations: true,
        search: true,
        layers: true,
      },
      sideBarOpenByDefault: true,
      views: [
        { key: 'single' },
        { key: 'gallery' },
        { key: 'book' },
        { key: 'scroll' },
      ],
    },
    workspace: {
      type: 'mosaic',
    },
    // Remove extra workspace settings
    workspaceControlPanel: {
      enabled: false,
    },
    windows: [{
      manifestId: manifestURI,
      defaultSearchQuery: query,
      canvasIndex: index,
      imageToolsEnabled: true,
      view: 'single',
    }],
  }
  const miradorPlugins = []
  const miradorInstance = Mirador.viewer(miradorConfig, miradorPlugins)
}
