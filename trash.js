setInterval(() => {
    const editor = monaco.editor.getModels()[0];
    if (editor) {
        const code = editor.getValue();
        console.log(code);
    } else {
        console.warn("Monaco editor model not found!");
    }
}, 4000);



