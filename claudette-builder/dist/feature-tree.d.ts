export interface FeatureNode {
    id: string;
    label: string;
    description: string;
    path: string;
    children: FeatureNode[];
    files: string[];
    isLeaf: boolean;
    required?: boolean;
}
/**
 * Feature tree organized around what a builder actually needs.
 *
 * Top-level groups are implementation layers — you build them in order.
 * Each feature maps to real documentation files in claudette/.
 *
 * "required" = the absolute minimum for a working Claudette.
 * If you skip a required feature, the agent won't function.
 * Optional features add polish, extensibility, or nice-to-haves.
 */
export declare function buildFeatureTree(basePath: string): Promise<FeatureNode[]>;
/**
 * Resolve file paths relative to the actual claudette/ directory.
 * Walks the tree and fills in .path for each node.
 */
export declare function resolveFeaturePaths(tree: FeatureNode[], basePath: string): Promise<FeatureNode[]>;
