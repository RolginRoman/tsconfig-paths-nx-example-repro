import {
  Tree
} from '@nrwl/devkit';
import { TestPluginGeneratorSchema } from './schema';

interface NormalizedSchema extends TestPluginGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

export default async function (tree: Tree, options: TestPluginGeneratorSchema) {
  console.log('test-plugin generator has generated cool things')
}
