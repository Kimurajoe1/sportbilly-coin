// Basic Token Conversion: Assumes 1 BNB = 1000 Sport Billy Tokens (adjust as needed)
function convertTokens() {
    const bnbAmount = document.getElementById("bnb-amount").value;
    const conversionRate = 1000; // 1 BNB = 1000 Sport Billy Tokens
    const tokenAmount = bnbAmount * conversionRate;

    const resultText = tokenAmount 
        ? `You will get approximately ${tokenAmount} Sport Billy Tokens for ${bnbAmount} BNB.` 
        : 'Please enter a valid BNB amount.';

    document.getElementById("conversion-result").innerText = resultText;
}
