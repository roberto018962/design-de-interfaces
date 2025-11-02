document.addEventListener('DOMContentLoaded', () => {
    const headerInput = document.getElementById('header-input');
    const footerInput = document.getElementById('footer-input');
    const livePreviewHeader = document.getElementById('live-preview-header');
    const livePreviewFooter = document.getElementById('live-preview-footer');
    const generateCodeBtn = document.getElementById('generate-code');
    const generatedCodeTextarea = document.getElementById('generated-code');

    headerInput.addEventListener('input', () => {
        livePreviewHeader.innerHTML = headerInput.value;
    });

    footerInput.addEventListener('input', () => {
        livePreviewFooter.innerHTML = footerInput.value;
    });

    generateCodeBtn.addEventListener('click', () => {
        const headerHTML = headerInput.value;
        const footerHTML = footerInput.value;
        const mainContentHTML = `
<main>
    <p>O conteúdo da sua página ficaria aqui.</p>
</main>
            `;

        const fullHTML = `<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sua Página Personalizada</title>
<style>
    /* Adicione aqui seus estilos ou link para um arquivo CSS */
    body { font-family: sans-serif; }
    header, footer { padding: 20px; background-color: #f0f0f0; }
</style>
</head>
<body>
<header>
${headerHTML}
</header>
${mainContentHTML}
<footer>
${footerHTML}
</footer>
</body>
</html>`;

        generatedCodeTextarea.value = fullHTML.trim();
    });
});
