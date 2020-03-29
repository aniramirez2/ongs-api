const generateUniqueId = require('../src/utils/generateUniqueId');

describe('Generate unique id', () => {
  it('should genertae a unique id', () => {
    const id = generateUniqueId()
    expect(id).toHaveLength(8)
  })
})