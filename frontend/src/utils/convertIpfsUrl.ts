import IPFSGatewayTools from '@pinata/ipfs-gateway-tools/dist/browser';
import { IPFS_GATEWAY_PREFIX } from '../constants';

// @param url
// ipfs://CID
// @return https://gateway.pinata.cloud/ipfs/CID
export default function convertIpfsUrl(url: string) {
  const gatewayTools = new IPFSGatewayTools();
  return gatewayTools.convertToDesiredGateway(url, IPFS_GATEWAY_PREFIX);
}
