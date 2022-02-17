function convert (value: string) {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

export function csvToJSON <T> (csvString: string) {
  const lines = csvString.split('\n')
  const headers = lines[0].split(',')
  const result = []

  for (let c = 1; c < lines.length; c++) {
    const line = lines[c]
    // const contents = line.split(',').map(x => x.slice(1, -1))
    // const header = headers[c].slice(1, -1)
    //
    // line.split(',').map(x =>)

  }

  console.log(headers)

  return result
}
