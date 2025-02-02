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




/**
 * Spec to create the KMS Config
 * @export
 * @interface KmsSpec
 */
export interface KmsSpec  {
  /**
   * Name of the KMS config
   * @type {string}
   * @memberof KmsSpec
   */
  name: string;
  /**
   * AWS access key
   * @type {string}
   * @memberof KmsSpec
   */
  access_key?: string;
  /**
   * AWS secret key
   * @type {string}
   * @memberof KmsSpec
   */
  secret_key?: string;
  /**
   * CMK id of AWS KMS
   * @type {string}
   * @memberof KmsSpec
   */
  cmk_id?: string;
  /**
   * AWS region
   * @type {string}
   * @memberof KmsSpec
   */
  region?: string;
  /**
   * KMS endpoint
   * @type {string}
   * @memberof KmsSpec
   */
  kms_endpoint?: string;
}



