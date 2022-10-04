import { v4 } from "uuid"
const getTimeDate = () => {
    let today = new Date()
    let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
    let time = today.getHours() + ":" + today.getMinutes()
    let dateTime = date+' '+time;
    return dateTime
  }


const mockResponse = {
    data: {
        chats: [
            {
                id: v4(),
                name: "Marvin",
                chat: ['Hey, how are you?'],
                timeStamp: getTimeDate()
            },
            {
                id: v4(),
                name: "test",
                chat: ['Hey hey, I`m doing okay'],
                timeStamp: getTimeDate()
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}