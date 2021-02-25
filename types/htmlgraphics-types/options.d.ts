type EditorCodeType = string | undefined;

interface OptionsInterface {
  add100Percentage: boolean;
  centerAlignContent: boolean;
  SVGBaseFix: boolean;
  css: EditorCodeType;
  html: EditorCodeType;
  onRender: EditorCodeType;
  onInit: EditorCodeType;
  customProperties: EditorCodeType;
}

/**
 * The panel options set.
 */
declare const options: OptionsInterface;
