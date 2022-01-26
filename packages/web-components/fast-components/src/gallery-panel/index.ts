import {
    galleryPanelTemplate,
    GalleryPanel,
    galleryTemplate,
    Gallery,
    galleryItemTemplate,
    GalleryItem,
} from "@microsoft/fast-foundation";
import { galleryStyles } from "./gallery.styles";
import { galleryItemStyles } from "./gallery-item.styles";
import { galleryPanelStyles } from "./gallery-panel.styles";

/**
 *
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fast-gallery-panel>`
 */
export const fastGalleryPanel = GalleryPanel.compose({
    baseName: "gallery-panel",
    template: galleryPanelTemplate,
    styles: galleryPanelStyles,
    shadowOptions: null,
});

/**
 * Base class for Gallery Panel
 * @public
 */
export { GalleryPanel };

export { galleryPanelStyles };

/**
 *
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fast-gallery>`
 */
export const fastGallery = Gallery.compose({
    baseName: "gallery",
    template: galleryTemplate,
    styles: galleryStyles,
    baseClass: Gallery,
    shadowOptions: null,
});

/**
 * Base class for Gallery Panel
 * @public
 */
export { Gallery };

export { galleryStyles };

/**
 *
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fast-gallery-item>`
 */
export const fastGalleryItem = GalleryItem.compose({
    baseName: "gallery-item",
    template: galleryItemTemplate,
    baseClass: GalleryItem,
    styles: galleryItemStyles,
});

/**
 * Base class for Gallery Panel
 * @public
 */
export { GalleryItem };

export { galleryItemStyles };