interface Status {
  error?: any,
  loading: boolean
}

type AsyncFunction = Array<{
  (handler: any): Promise<any>, 
  Status
}>

type Options = {
  delayMs: number
}

export default function useAsyncFunction(fn: Function, options: Options): AsyncFunction;
