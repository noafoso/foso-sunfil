async function translateText(text: string, targetLanguage: string): Promise<string> {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
    const baseUrlClient = process.env.NEXT_PUBLIC_URL_WEBSITE;
    const url = `https://translate-pa.googleapis.com/v1/translateHtml`;
    // const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json+protobuf',
            'X-Goog-Api-Key': apiKey ?? ""
        },
        body: JSON.stringify({
            q: text,
            target: targetLanguage,
        }),
    });

    const data = await response.json();

    console.log('data', data);


    return data.data.translations[0].translatedText;
}

export { translateText };