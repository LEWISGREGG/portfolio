import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '3b69j6q4',
  dataset: 'pro',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
