// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { ClusterSpec } from './ClusterSpec';
// eslint-disable-next-line no-duplicate-imports
import type { CreateClusterRequestDbCredentials } from './CreateClusterRequestDbCredentials';


/**
 * Create cluster request
 * @export
 * @interface CreateClusterRequest
 */
export interface CreateClusterRequest  {
  /**
   * 
   * @type {ClusterSpec}
   * @memberof CreateClusterRequest
   */
  cluster_spec: ClusterSpec;
  /**
   * 
   * @type {CreateClusterRequestDbCredentials}
   * @memberof CreateClusterRequest
   */
  db_credentials: CreateClusterRequestDbCredentials;
}



