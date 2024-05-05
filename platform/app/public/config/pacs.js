window.config = {
  routerBasename: '/',

  modes: [],
  extensions: [],

  showLoadingIndicator: true,
  showCPUFallbackMessage: true,
  showWarningMessageForCrossOrigin: true,

  // Hide studies list view
  showStudyList: false,

  // Some of Windows systems have issues with more than 3 web workers
  maxNumberOfWebWorkers: 3,

  // Only allow specifying study via JSON
  defaultDataSourceName: 'dicomjson',
  dataSources: [
    {
      sourceName: 'dicomjson',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      configuration: { name: 'dicomjson', friendlyName: 'dicomweb read json' },
    },
  ],
};
