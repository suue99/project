export default {
    name: 'exercise',
    type: 'document',
    title: 'Exercise',
    fields: [
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'description', type: 'text', title: 'Description' },
      {
        name: 'joint',
        type: 'string',
        title: 'Joint',
        options: {
          list: ['wrist', 'elbow', 'knee', 'hip', 'ankle'] 
        }
      },
      {
        name: 'type',
        type: 'string',
        title: 'Type',
        options: {
          list: ['strengthening', 'endurance', 'dynamic stretching'] 
        }
      },
      { name: 'instructions', type: 'array', of: [{type: 'block' }], title: 'Instructions' },
      { name: 'media', type: 'image', title: 'Image' },
    ]
  }
 