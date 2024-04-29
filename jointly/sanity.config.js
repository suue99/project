import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Jointly',

  projectId: 'jknbs1zm',
  dataset: 'test',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
