import { v4 } from "uuid"

const mockResponse = {
    data: {
        chats: [
            {
                id: v4(),
                name: "Marvin",
                chat: ['Hey, how are you?']
            },
            {
                id: v4(),
                name: "test",
                chat: ['Hey hey, I`m doing okay']
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}