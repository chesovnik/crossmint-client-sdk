import * as React from "react";

import { NFTDetailProps, assertValidValidateNFTDetailProps, getNFTDetailSrc } from "@crossmint/client-sdk-base";

import { LIB_VERSION } from "./version";

export function CrossmintNFTDetail(props: NFTDetailProps) {
    assertValidValidateNFTDetailProps(props);

    const src = getNFTDetailSrc(props, LIB_VERSION);

    return (
        <iframe
            src={src}
            width="100%"
            height="100%"
            style={{
                flexGrow: "1",
                border: "none",
                margin: "0",
                padding: "0",
            }}
            role="nft-details"
        />
    );
}
