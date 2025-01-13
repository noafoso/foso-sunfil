async function translateText(textArray: any, targetLanguage: string): Promise<string> {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
    const baseUrlClient = process.env.NEXT_PUBLIC_URL_WEBSITE;
    const url = `https://translate-pa.googleapis.com/v1/translateHtml`;

    if (!textArray || !targetLanguage) {
        throw new Error('Text and target language are required.');
    }

    // Gói gọn payload theo cấu trúc yêu cầu
    const requestBody = [
        [
            textArray, // nội dung cần dịch
            `${targetLanguage === 'en' ? "auto" : "en"}`, // ngôn ngữ gốc
            targetLanguage, // ngôn ngữ đích
        ],
        'te' // mã ngôn ngữ thứ hai nếu cần
    ];
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json+protobuf',
                'X-Goog-Api-Key': apiKey ?? "",
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Error response:', data);
            throw new Error(data?.error?.message || 'Translation failed');
        }

        return data;

    } catch (error) {
        console.error('Translation error:', error);
        throw new Error('Translation failed');
    }
}

export { translateText };