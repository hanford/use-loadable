interface Status {
  error?: any,
  loading: boolean,
  res?: any
}

type AsyncFunction = Array<{
  Status,
  (handler: any): Promise<any>
}>

type Options = {
  delayMs: number
}

export default function useAsyncFunction(fn: Function, options: Options): AsyncFunction;
