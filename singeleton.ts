export class LoggerSingleton {
    private static _instance:LoggerSingleton | null = null

    private logs: string[] = []

    private constructor() {}

    public static getInstance(): LoggerSingleton {
        if (LoggerSingleton._instance) {
            return LoggerSingleton._instance
        } else {
            return LoggerSingleton._instance = new LoggerSingleton()
        }
    }

    public info(msg: string) {
        this.logs.push(msg)
    }

    public getAll(): string[] {
        console.log(this.logs)
        return this.logs
    }
}


const loggerA = LoggerSingleton.getInstance()
loggerA.info('test')
loggerA.getAll()