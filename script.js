document.addEventListener('DOMContentLoaded', function() {
    // Chatbot functionality
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const quickBtns = document.querySelectorAll('.quick-btn');

    // Initial bot message
    addBotMessage('Olá! Sou o assistente de IA da AgroTech Milho. Como posso ajudar você com problemas de pragas em sua lavoura de milho hoje?');

    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);

    // Send message on Enter key
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Quick question buttons
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            sendMessage();
        });
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        addUserMessage(message);
        userInput.value = '';

        // Simulate thinking
        setTimeout(() => {
            generateBotResponse(message);
        }, 1000);
    }

    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function generateBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let response = '';

        // Simple response logic - in a real app, this would connect to an AI service
        if (lowerMessage.includes('lagarta') || lowerMessage.includes('cartucho')) {
            response = `A lagarta-do-cartucho (Spodoptera frugiperda) é uma das principais pragas do milho. Recomendações:
1. Monitoramento semanal da lavoura
2. Controle biológico com vespas Trichogramma
3. Inseticidas recomendados: Clorantraniliprole ou Espinetoram
4. Rotação de culturas para quebrar o ciclo da praga`;
        } 
        else if (lowerMessage.includes('mancha') || lowerMessage.includes('folha')) {
            response = `Manchas nas folhas podem indicar várias doenças:
- Mancha branca: Fungicidas à base de triazóis
- Ferrugem comum: Controle com estrobilurinas
- Cercosporiose: Manchas alongadas, tratamento com Mancozeb

Envie uma foto para diagnóstico mais preciso.`;
        }
        else if (lowerMessage.includes('preven') || lowerMessage.includes('evitar')) {
            response = `Medidas preventivas contra pragas no milho:
1. Rotação de culturas com soja ou feijão
2. Plantio na época recomendada para sua região
3. Uso de sementes tratadas
4. Manutenção de áreas de refúgio
5. Monitoramento constante com armadilhas feromônios`;
        }
        else if (lowerMessage.includes('produtividade') || lowerMessage.includes('aumentar')) {
            response = `Para aumentar a produtividade do milho:
1. Análise de solo e correção adequada
2. Adubação equilibrada com NPK
3. Controle eficiente de pragas e doenças
4. Irrigação adequada (se possível)
5. Escolha de híbridos adaptados à sua região`;
        }
        else {
            response = `Entendi que você precisa de ajuda com "${userMessage}". Nossa equipe de IA está analisando sua consulta. Enquanto isso, você pode:
1. Descrever os sintomas com mais detalhes
2. Enviar fotos da planta afetada
3. Informar a fase de desenvolvimento da cultura
4. Relatar condições climáticas recentes`;
        }

        addBotMessage(response);
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
