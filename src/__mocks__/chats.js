const mockResponse = {
    data: {
        chats: [
            {
                id: Math.round(Math.random() * 10),
                name: "Marvin",
                chat: ['Hey, how are you?']
            },
            {
                id: Math.round(Math.random() * 10),
                name: "test",
                chat: ['Hey hey, I`m doing okay']
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}