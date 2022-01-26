import { attr, DOM, FASTElement, observable } from "@microsoft/fast-element";
import type { VirtualList } from "..";
import { FoundationElement } from "../foundation-element";
import type { GalleryData } from "./gallery";

/**
 *
 *
 * @public
 */
export interface GalleryPanelData {
    /**
     *
     */
    title: string;

    /**
     *
     */
    galleries: GalleryData[];
}

/**
 *
 *
 * @public
 */
export class GalleryPanel extends FoundationElement {
    /**
     *
     *
     * @public
     */
    @observable
    public panelData: GalleryPanelData;
    private panelDataChanged(): void {
        if (this.$fastController.isConnected) {
            this.galleriesListElement.items = this.panelData.galleries;
        }
    }

    public galleriesListElement: VirtualList;

    public connectedCallback(): void {
        super.connectedCallback();
        DOM.queueUpdate(() => {
            this.initialize();
        });
    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    private initialize(): void {
        this.galleriesListElement.viewportElement = document.documentElement;
    }
}