export {}

declare global {
    interface Window {
        $app: { [key: string]: any }
    }
}
