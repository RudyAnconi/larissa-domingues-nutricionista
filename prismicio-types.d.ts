// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = BlocoSlice | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *Bloco → Primary*
 */
export interface BlocoSliceDefaultPrimary {
  /**
   * Código (não alterar) field in *Bloco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.codigo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  codigo: prismic.KeyTextField;

  /**
   * Título field in *Bloco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Ícone field in *Bloco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.icone
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone: prismic.ImageField<never>;

  /**
   * Imagem field in *Bloco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;
}

/**
 * Primary content in *Bloco → Items*
 */
export interface BlocoSliceDefaultItem {
  /**
   * Conteúdo field in *Bloco → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.items[].conteudo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField;
}

/**
 * Default variation for Bloco Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlocoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlocoSliceDefaultPrimary>,
  Simplify<BlocoSliceDefaultItem>
>;

/**
 * Primary content in *Bloco → Primary*
 */
export interface BlocoSliceBlocoValorPrimary {
  /**
   * Código (não alterar) field in *Bloco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.codigo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  codigo: prismic.KeyTextField;

  /**
   * Título field in *Bloco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Ícone field in *Bloco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.icone
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone: prismic.ImageField<never>;

  /**
   * Imagem field in *Bloco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;
}

/**
 * Primary content in *Bloco → Items*
 */
export interface BlocoSliceBlocoValorItem {
  /**
   * Tipo field in *Bloco → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.items[].tipo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tipo: prismic.KeyTextField;

  /**
   * Título field in *Bloco → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.items[].titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Com retorno field in *Bloco → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: bloco.items[].com_retorno
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  com_retorno: prismic.BooleanField;

  /**
   * Valor field in *Bloco → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.items[].valor
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  valor: prismic.KeyTextField;
}

/**
 * Valor variation for Bloco Slice
 *
 * - **API ID**: `blocoValor`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlocoSliceBlocoValor = prismic.SharedSliceVariation<
  "blocoValor",
  Simplify<BlocoSliceBlocoValorPrimary>,
  Simplify<BlocoSliceBlocoValorItem>
>;

/**
 * Primary content in *Bloco → Primary*
 */
export interface BlocoSliceBlocoFormasDePagamentoPrimary {
  /**
   * Código (não alterar) field in *Bloco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.codigo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  codigo: prismic.KeyTextField;

  /**
   * Título field in *Bloco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Ícone field in *Bloco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.icone
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone: prismic.ImageField<never>;

  /**
   * Imagem field in *Bloco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.primary.imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;
}

/**
 * Primary content in *Bloco → Items*
 */
export interface BlocoSliceBlocoFormasDePagamentoItem {
  /**
   * Tipo field in *Bloco → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.items[].tipo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tipo: prismic.KeyTextField;

  /**
   * Conteúdo field in *Bloco → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bloco.items[].conteudo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField;
}

/**
 * Formas de Pagamento variation for Bloco Slice
 *
 * - **API ID**: `blocoFormasDePagamento`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlocoSliceBlocoFormasDePagamento = prismic.SharedSliceVariation<
  "blocoFormasDePagamento",
  Simplify<BlocoSliceBlocoFormasDePagamentoPrimary>,
  Simplify<BlocoSliceBlocoFormasDePagamentoItem>
>;

/**
 * Slice variation for *Bloco*
 */
type BlocoSliceVariation =
  | BlocoSliceDefault
  | BlocoSliceBlocoValor
  | BlocoSliceBlocoFormasDePagamento;

/**
 * Bloco Shared Slice
 *
 * - **API ID**: `bloco`
 * - **Description**: Bloco
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlocoSlice = prismic.SharedSlice<"bloco", BlocoSliceVariation>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Foto field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.foto
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto: prismic.ImageField<never>;

  /**
   * Logo field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Nome field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.nome
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nome: prismic.KeyTextField;

  /**
   * Profissão field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.profissao
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  profissao: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlocoSlice,
      BlocoSliceDefaultPrimary,
      BlocoSliceDefaultItem,
      BlocoSliceBlocoValorPrimary,
      BlocoSliceBlocoValorItem,
      BlocoSliceBlocoFormasDePagamentoPrimary,
      BlocoSliceBlocoFormasDePagamentoItem,
      BlocoSliceVariation,
      BlocoSliceDefault,
      BlocoSliceBlocoValor,
      BlocoSliceBlocoFormasDePagamento,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
