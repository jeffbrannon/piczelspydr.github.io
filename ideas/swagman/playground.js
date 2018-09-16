const project = {
    files: {
        'index.html': `<h2>Hello there!</h2>`,
        'index.ts': `// I'm empty.`,
        'randomFile.ts': '// You should delete me.'
    },
    title: 'Dynamically Generated Project',
    description: 'Created with <3 by the StackBlitz SDK!',
    template: 'typescript',
    tags: ['stackblitz', 'sdk'],
    settings: {
        compile: {
            trigger: 'auto'
        }
    }
};

function onLoad() {

    StackBlitzSDK.embedProject('myDiv', project, {
        openFile: 'index.html',
        hideExplorer: true,
        hideNavigation: true,
        forceEmbedLayout: true,
        hideDevTools: true
    });

}
