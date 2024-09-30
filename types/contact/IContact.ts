export interface IQuestion {
    id: string; // ID of the question
    question: string; // The question text
    answer: string; // The answer text (could include HTML)
    staff_create: string; // ID of the staff member who created the question
    date_create: string; // Creation date of the question
    date_update: string | null; // Update date of the question (can be null if not updated)
}

export interface IQuestionResponse {
    current_page: string; // Current page number
    next_page: number; // Next page number (0 if there's no next page)
    question: IQuestion[]; // Array of questions
    result: boolean; // Indicates success or failure of the response
}

export interface IValueFormContact {
    name: string;
    email: string;
    phone: string;
    company: string;
    products: string;
    budget: string;
    note?: string;
}
