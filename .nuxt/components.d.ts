
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'BackToTop': typeof import("../components/BackToTop.vue")['default']
    'Breadcrumb': typeof import("../components/Breadcrumb.vue")['default']
    'MarqueeText': typeof import("../components/MarqueeText.vue")['default']
    'MobileMenu': typeof import("../components/MobileMenu.vue")['default']
    'MouseCursor': typeof import("../components/MouseCursor.vue")['default']
    'NavMenu': typeof import("../components/NavMenu.vue")['default']
    'Offcanvas': typeof import("../components/Offcanvas.vue")['default']
    'Preloader': typeof import("../components/Preloader.vue")['default']
    'ScrollCounter': typeof import("../components/ScrollCounter.vue")['default']
    'FooterOne': typeof import("../components/footer/FooterOne.vue")['default']
    'FooterThree': typeof import("../components/footer/FooterThree.vue")['default']
    'FooterTwo': typeof import("../components/footer/FooterTwo.vue")['default']
    'HeaderOne': typeof import("../components/header/HeaderOne.vue")['default']
    'HeaderThree': typeof import("../components/header/HeaderThree.vue")['default']
    'HeaderTwo': typeof import("../components/header/HeaderTwo.vue")['default']
    'SectionsAboutSectionFour': typeof import("../components/sections/AboutSectionFour.vue")['default']
    'SectionsAboutSectionOne': typeof import("../components/sections/AboutSectionOne.vue")['default']
    'SectionsAboutSectionThree': typeof import("../components/sections/AboutSectionThree.vue")['default']
    'SectionsAboutSectionTwo': typeof import("../components/sections/AboutSectionTwo.vue")['default']
    'SectionsBrandSectionOne': typeof import("../components/sections/BrandSectionOne.vue")['default']
    'SectionsCheckoutSection': typeof import("../components/sections/CheckoutSection.vue")['default']
    'SectionsChooseUsSectionTwo': typeof import("../components/sections/ChooseUsSectionTwo.vue")['default']
    'SectionsContactSection': typeof import("../components/sections/ContactSection.vue")['default']
    'SectionsContactSectionThree': typeof import("../components/sections/ContactSectionThree.vue")['default']
    'SectionsContactSectionTwo': typeof import("../components/sections/ContactSectionTwo.vue")['default']
    'SectionsContactUsSectionOne': typeof import("../components/sections/ContactUsSectionOne.vue")['default']
    'SectionsCtaBannerSection': typeof import("../components/sections/CtaBannerSection.vue")['default']
    'SectionsCtaSectionOne': typeof import("../components/sections/CtaSectionOne.vue")['default']
    'SectionsCtaSectionThree': typeof import("../components/sections/CtaSectionThree.vue")['default']
    'SectionsError404Section': typeof import("../components/sections/Error404Section.vue")['default']
    'SectionsFaqSection': typeof import("../components/sections/FaqSection.vue")['default']
    'SectionsFaqSectionFour': typeof import("../components/sections/FaqSectionFour.vue")['default']
    'SectionsFaqSectionThree': typeof import("../components/sections/FaqSectionThree.vue")['default']
    'SectionsHeroSectionOne': typeof import("../components/sections/HeroSectionOne.vue")['default']
    'SectionsHeroSectionThree': typeof import("../components/sections/HeroSectionThree.vue")['default']
    'SectionsHeroSectionTwo': typeof import("../components/sections/HeroSectionTwo.vue")['default']
    'SectionsHowWorkSectionOne': typeof import("../components/sections/HowWorkSectionOne.vue")['default']
    'SectionsMarqueeSectionOne': typeof import("../components/sections/MarqueeSectionOne.vue")['default']
    'SectionsMarqueeSectionThree': typeof import("../components/sections/MarqueeSectionThree.vue")['default']
    'SectionsMarqueeSectionTwo': typeof import("../components/sections/MarqueeSectionTwo.vue")['default']
    'SectionsNewsDetailsSection': typeof import("../components/sections/NewsDetailsSection.vue")['default']
    'SectionsNewsSectionOne': typeof import("../components/sections/NewsSectionOne.vue")['default']
    'SectionsNewsSectionThree': typeof import("../components/sections/NewsSectionThree.vue")['default']
    'SectionsNewsSectionTwo': typeof import("../components/sections/NewsSectionTwo.vue")['default']
    'SectionsNewsStandardSection': typeof import("../components/sections/NewsStandardSection.vue")['default']
    'SectionsPersonalSection': typeof import("../components/sections/PersonalSection.vue")['default']
    'SectionsPricingSectionOne': typeof import("../components/sections/PricingSectionOne.vue")['default']
    'SectionsPricingSectionTwo': typeof import("../components/sections/PricingSectionTwo.vue")['default']
    'SectionsProjectDetailsSection': typeof import("../components/sections/ProjectDetailsSection.vue")['default']
    'SectionsProjectDetailsSectionTwo': typeof import("../components/sections/ProjectDetailsSectionTwo.vue")['default']
    'SectionsProjectSectionOne': typeof import("../components/sections/ProjectSectionOne.vue")['default']
    'SectionsProjectSectionThree': typeof import("../components/sections/ProjectSectionThree.vue")['default']
    'SectionsProjectSectionTwo': typeof import("../components/sections/ProjectSectionTwo.vue")['default']
    'SectionsSearchSection': typeof import("../components/sections/SearchSection.vue")['default']
    'SectionsServiceDetailsSection': typeof import("../components/sections/ServiceDetailsSection.vue")['default']
    'SectionsServiceSection': typeof import("../components/sections/ServiceSection.vue")['default']
    'SectionsServiceSectionOne': typeof import("../components/sections/ServiceSectionOne.vue")['default']
    'SectionsServiceSectionThree': typeof import("../components/sections/ServiceSectionThree.vue")['default']
    'SectionsServiceSectionTwo': typeof import("../components/sections/ServiceSectionTwo.vue")['default']
    'SectionsServicesDomain': typeof import("../components/sections/ServicesDomain.vue")['default']
    'SectionsShopCartSection': typeof import("../components/sections/ShopCartSection.vue")['default']
    'SectionsShopDetailsSection': typeof import("../components/sections/ShopDetailsSection.vue")['default']
    'SectionsShopPageSection': typeof import("../components/sections/ShopPageSection.vue")['default']
    'SectionsTeamDetailsSection': typeof import("../components/sections/TeamDetailsSection.vue")['default']
    'SectionsTeamSection': typeof import("../components/sections/TeamSection.vue")['default']
    'SectionsTeamSectionOne': typeof import("../components/sections/TeamSectionOne.vue")['default']
    'SectionsTeamSectionThree': typeof import("../components/sections/TeamSectionThree.vue")['default']
    'SectionsTeamSectionTwo': typeof import("../components/sections/TeamSectionTwo.vue")['default']
    'SectionsTestimonialSectionOne': typeof import("../components/sections/TestimonialSectionOne.vue")['default']
    'SectionsTestimonialSectionThree': typeof import("../components/sections/TestimonialSectionThree.vue")['default']
    'SectionsTestimonialSectionTwo': typeof import("../components/sections/TestimonialSectionTwo.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyBackToTop': LazyComponent<typeof import("../components/BackToTop.vue")['default']>
    'LazyBreadcrumb': LazyComponent<typeof import("../components/Breadcrumb.vue")['default']>
    'LazyMarqueeText': LazyComponent<typeof import("../components/MarqueeText.vue")['default']>
    'LazyMobileMenu': LazyComponent<typeof import("../components/MobileMenu.vue")['default']>
    'LazyMouseCursor': LazyComponent<typeof import("../components/MouseCursor.vue")['default']>
    'LazyNavMenu': LazyComponent<typeof import("../components/NavMenu.vue")['default']>
    'LazyOffcanvas': LazyComponent<typeof import("../components/Offcanvas.vue")['default']>
    'LazyPreloader': LazyComponent<typeof import("../components/Preloader.vue")['default']>
    'LazyScrollCounter': LazyComponent<typeof import("../components/ScrollCounter.vue")['default']>
    'LazyFooterOne': LazyComponent<typeof import("../components/footer/FooterOne.vue")['default']>
    'LazyFooterThree': LazyComponent<typeof import("../components/footer/FooterThree.vue")['default']>
    'LazyFooterTwo': LazyComponent<typeof import("../components/footer/FooterTwo.vue")['default']>
    'LazyHeaderOne': LazyComponent<typeof import("../components/header/HeaderOne.vue")['default']>
    'LazyHeaderThree': LazyComponent<typeof import("../components/header/HeaderThree.vue")['default']>
    'LazyHeaderTwo': LazyComponent<typeof import("../components/header/HeaderTwo.vue")['default']>
    'LazySectionsAboutSectionFour': LazyComponent<typeof import("../components/sections/AboutSectionFour.vue")['default']>
    'LazySectionsAboutSectionOne': LazyComponent<typeof import("../components/sections/AboutSectionOne.vue")['default']>
    'LazySectionsAboutSectionThree': LazyComponent<typeof import("../components/sections/AboutSectionThree.vue")['default']>
    'LazySectionsAboutSectionTwo': LazyComponent<typeof import("../components/sections/AboutSectionTwo.vue")['default']>
    'LazySectionsBrandSectionOne': LazyComponent<typeof import("../components/sections/BrandSectionOne.vue")['default']>
    'LazySectionsCheckoutSection': LazyComponent<typeof import("../components/sections/CheckoutSection.vue")['default']>
    'LazySectionsChooseUsSectionTwo': LazyComponent<typeof import("../components/sections/ChooseUsSectionTwo.vue")['default']>
    'LazySectionsContactSection': LazyComponent<typeof import("../components/sections/ContactSection.vue")['default']>
    'LazySectionsContactSectionThree': LazyComponent<typeof import("../components/sections/ContactSectionThree.vue")['default']>
    'LazySectionsContactSectionTwo': LazyComponent<typeof import("../components/sections/ContactSectionTwo.vue")['default']>
    'LazySectionsContactUsSectionOne': LazyComponent<typeof import("../components/sections/ContactUsSectionOne.vue")['default']>
    'LazySectionsCtaBannerSection': LazyComponent<typeof import("../components/sections/CtaBannerSection.vue")['default']>
    'LazySectionsCtaSectionOne': LazyComponent<typeof import("../components/sections/CtaSectionOne.vue")['default']>
    'LazySectionsCtaSectionThree': LazyComponent<typeof import("../components/sections/CtaSectionThree.vue")['default']>
    'LazySectionsError404Section': LazyComponent<typeof import("../components/sections/Error404Section.vue")['default']>
    'LazySectionsFaqSection': LazyComponent<typeof import("../components/sections/FaqSection.vue")['default']>
    'LazySectionsFaqSectionFour': LazyComponent<typeof import("../components/sections/FaqSectionFour.vue")['default']>
    'LazySectionsFaqSectionThree': LazyComponent<typeof import("../components/sections/FaqSectionThree.vue")['default']>
    'LazySectionsHeroSectionOne': LazyComponent<typeof import("../components/sections/HeroSectionOne.vue")['default']>
    'LazySectionsHeroSectionThree': LazyComponent<typeof import("../components/sections/HeroSectionThree.vue")['default']>
    'LazySectionsHeroSectionTwo': LazyComponent<typeof import("../components/sections/HeroSectionTwo.vue")['default']>
    'LazySectionsHowWorkSectionOne': LazyComponent<typeof import("../components/sections/HowWorkSectionOne.vue")['default']>
    'LazySectionsMarqueeSectionOne': LazyComponent<typeof import("../components/sections/MarqueeSectionOne.vue")['default']>
    'LazySectionsMarqueeSectionThree': LazyComponent<typeof import("../components/sections/MarqueeSectionThree.vue")['default']>
    'LazySectionsMarqueeSectionTwo': LazyComponent<typeof import("../components/sections/MarqueeSectionTwo.vue")['default']>
    'LazySectionsNewsDetailsSection': LazyComponent<typeof import("../components/sections/NewsDetailsSection.vue")['default']>
    'LazySectionsNewsSectionOne': LazyComponent<typeof import("../components/sections/NewsSectionOne.vue")['default']>
    'LazySectionsNewsSectionThree': LazyComponent<typeof import("../components/sections/NewsSectionThree.vue")['default']>
    'LazySectionsNewsSectionTwo': LazyComponent<typeof import("../components/sections/NewsSectionTwo.vue")['default']>
    'LazySectionsNewsStandardSection': LazyComponent<typeof import("../components/sections/NewsStandardSection.vue")['default']>
    'LazySectionsPersonalSection': LazyComponent<typeof import("../components/sections/PersonalSection.vue")['default']>
    'LazySectionsPricingSectionOne': LazyComponent<typeof import("../components/sections/PricingSectionOne.vue")['default']>
    'LazySectionsPricingSectionTwo': LazyComponent<typeof import("../components/sections/PricingSectionTwo.vue")['default']>
    'LazySectionsProjectDetailsSection': LazyComponent<typeof import("../components/sections/ProjectDetailsSection.vue")['default']>
    'LazySectionsProjectDetailsSectionTwo': LazyComponent<typeof import("../components/sections/ProjectDetailsSectionTwo.vue")['default']>
    'LazySectionsProjectSectionOne': LazyComponent<typeof import("../components/sections/ProjectSectionOne.vue")['default']>
    'LazySectionsProjectSectionThree': LazyComponent<typeof import("../components/sections/ProjectSectionThree.vue")['default']>
    'LazySectionsProjectSectionTwo': LazyComponent<typeof import("../components/sections/ProjectSectionTwo.vue")['default']>
    'LazySectionsSearchSection': LazyComponent<typeof import("../components/sections/SearchSection.vue")['default']>
    'LazySectionsServiceDetailsSection': LazyComponent<typeof import("../components/sections/ServiceDetailsSection.vue")['default']>
    'LazySectionsServiceSection': LazyComponent<typeof import("../components/sections/ServiceSection.vue")['default']>
    'LazySectionsServiceSectionOne': LazyComponent<typeof import("../components/sections/ServiceSectionOne.vue")['default']>
    'LazySectionsServiceSectionThree': LazyComponent<typeof import("../components/sections/ServiceSectionThree.vue")['default']>
    'LazySectionsServiceSectionTwo': LazyComponent<typeof import("../components/sections/ServiceSectionTwo.vue")['default']>
    'LazySectionsServicesDomain': LazyComponent<typeof import("../components/sections/ServicesDomain.vue")['default']>
    'LazySectionsShopCartSection': LazyComponent<typeof import("../components/sections/ShopCartSection.vue")['default']>
    'LazySectionsShopDetailsSection': LazyComponent<typeof import("../components/sections/ShopDetailsSection.vue")['default']>
    'LazySectionsShopPageSection': LazyComponent<typeof import("../components/sections/ShopPageSection.vue")['default']>
    'LazySectionsTeamDetailsSection': LazyComponent<typeof import("../components/sections/TeamDetailsSection.vue")['default']>
    'LazySectionsTeamSection': LazyComponent<typeof import("../components/sections/TeamSection.vue")['default']>
    'LazySectionsTeamSectionOne': LazyComponent<typeof import("../components/sections/TeamSectionOne.vue")['default']>
    'LazySectionsTeamSectionThree': LazyComponent<typeof import("../components/sections/TeamSectionThree.vue")['default']>
    'LazySectionsTeamSectionTwo': LazyComponent<typeof import("../components/sections/TeamSectionTwo.vue")['default']>
    'LazySectionsTestimonialSectionOne': LazyComponent<typeof import("../components/sections/TestimonialSectionOne.vue")['default']>
    'LazySectionsTestimonialSectionThree': LazyComponent<typeof import("../components/sections/TestimonialSectionThree.vue")['default']>
    'LazySectionsTestimonialSectionTwo': LazyComponent<typeof import("../components/sections/TestimonialSectionTwo.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const BackToTop: typeof import("../components/BackToTop.vue")['default']
export const Breadcrumb: typeof import("../components/Breadcrumb.vue")['default']
export const MarqueeText: typeof import("../components/MarqueeText.vue")['default']
export const MobileMenu: typeof import("../components/MobileMenu.vue")['default']
export const MouseCursor: typeof import("../components/MouseCursor.vue")['default']
export const NavMenu: typeof import("../components/NavMenu.vue")['default']
export const Offcanvas: typeof import("../components/Offcanvas.vue")['default']
export const Preloader: typeof import("../components/Preloader.vue")['default']
export const ScrollCounter: typeof import("../components/ScrollCounter.vue")['default']
export const FooterOne: typeof import("../components/footer/FooterOne.vue")['default']
export const FooterThree: typeof import("../components/footer/FooterThree.vue")['default']
export const FooterTwo: typeof import("../components/footer/FooterTwo.vue")['default']
export const HeaderOne: typeof import("../components/header/HeaderOne.vue")['default']
export const HeaderThree: typeof import("../components/header/HeaderThree.vue")['default']
export const HeaderTwo: typeof import("../components/header/HeaderTwo.vue")['default']
export const SectionsAboutSectionFour: typeof import("../components/sections/AboutSectionFour.vue")['default']
export const SectionsAboutSectionOne: typeof import("../components/sections/AboutSectionOne.vue")['default']
export const SectionsAboutSectionThree: typeof import("../components/sections/AboutSectionThree.vue")['default']
export const SectionsAboutSectionTwo: typeof import("../components/sections/AboutSectionTwo.vue")['default']
export const SectionsBrandSectionOne: typeof import("../components/sections/BrandSectionOne.vue")['default']
export const SectionsCheckoutSection: typeof import("../components/sections/CheckoutSection.vue")['default']
export const SectionsChooseUsSectionTwo: typeof import("../components/sections/ChooseUsSectionTwo.vue")['default']
export const SectionsContactSection: typeof import("../components/sections/ContactSection.vue")['default']
export const SectionsContactSectionThree: typeof import("../components/sections/ContactSectionThree.vue")['default']
export const SectionsContactSectionTwo: typeof import("../components/sections/ContactSectionTwo.vue")['default']
export const SectionsContactUsSectionOne: typeof import("../components/sections/ContactUsSectionOne.vue")['default']
export const SectionsCtaBannerSection: typeof import("../components/sections/CtaBannerSection.vue")['default']
export const SectionsCtaSectionOne: typeof import("../components/sections/CtaSectionOne.vue")['default']
export const SectionsCtaSectionThree: typeof import("../components/sections/CtaSectionThree.vue")['default']
export const SectionsError404Section: typeof import("../components/sections/Error404Section.vue")['default']
export const SectionsFaqSection: typeof import("../components/sections/FaqSection.vue")['default']
export const SectionsFaqSectionFour: typeof import("../components/sections/FaqSectionFour.vue")['default']
export const SectionsFaqSectionThree: typeof import("../components/sections/FaqSectionThree.vue")['default']
export const SectionsHeroSectionOne: typeof import("../components/sections/HeroSectionOne.vue")['default']
export const SectionsHeroSectionThree: typeof import("../components/sections/HeroSectionThree.vue")['default']
export const SectionsHeroSectionTwo: typeof import("../components/sections/HeroSectionTwo.vue")['default']
export const SectionsHowWorkSectionOne: typeof import("../components/sections/HowWorkSectionOne.vue")['default']
export const SectionsMarqueeSectionOne: typeof import("../components/sections/MarqueeSectionOne.vue")['default']
export const SectionsMarqueeSectionThree: typeof import("../components/sections/MarqueeSectionThree.vue")['default']
export const SectionsMarqueeSectionTwo: typeof import("../components/sections/MarqueeSectionTwo.vue")['default']
export const SectionsNewsDetailsSection: typeof import("../components/sections/NewsDetailsSection.vue")['default']
export const SectionsNewsSectionOne: typeof import("../components/sections/NewsSectionOne.vue")['default']
export const SectionsNewsSectionThree: typeof import("../components/sections/NewsSectionThree.vue")['default']
export const SectionsNewsSectionTwo: typeof import("../components/sections/NewsSectionTwo.vue")['default']
export const SectionsNewsStandardSection: typeof import("../components/sections/NewsStandardSection.vue")['default']
export const SectionsPersonalSection: typeof import("../components/sections/PersonalSection.vue")['default']
export const SectionsPricingSectionOne: typeof import("../components/sections/PricingSectionOne.vue")['default']
export const SectionsPricingSectionTwo: typeof import("../components/sections/PricingSectionTwo.vue")['default']
export const SectionsProjectDetailsSection: typeof import("../components/sections/ProjectDetailsSection.vue")['default']
export const SectionsProjectDetailsSectionTwo: typeof import("../components/sections/ProjectDetailsSectionTwo.vue")['default']
export const SectionsProjectSectionOne: typeof import("../components/sections/ProjectSectionOne.vue")['default']
export const SectionsProjectSectionThree: typeof import("../components/sections/ProjectSectionThree.vue")['default']
export const SectionsProjectSectionTwo: typeof import("../components/sections/ProjectSectionTwo.vue")['default']
export const SectionsSearchSection: typeof import("../components/sections/SearchSection.vue")['default']
export const SectionsServiceDetailsSection: typeof import("../components/sections/ServiceDetailsSection.vue")['default']
export const SectionsServiceSection: typeof import("../components/sections/ServiceSection.vue")['default']
export const SectionsServiceSectionOne: typeof import("../components/sections/ServiceSectionOne.vue")['default']
export const SectionsServiceSectionThree: typeof import("../components/sections/ServiceSectionThree.vue")['default']
export const SectionsServiceSectionTwo: typeof import("../components/sections/ServiceSectionTwo.vue")['default']
export const SectionsServicesDomain: typeof import("../components/sections/ServicesDomain.vue")['default']
export const SectionsShopCartSection: typeof import("../components/sections/ShopCartSection.vue")['default']
export const SectionsShopDetailsSection: typeof import("../components/sections/ShopDetailsSection.vue")['default']
export const SectionsShopPageSection: typeof import("../components/sections/ShopPageSection.vue")['default']
export const SectionsTeamDetailsSection: typeof import("../components/sections/TeamDetailsSection.vue")['default']
export const SectionsTeamSection: typeof import("../components/sections/TeamSection.vue")['default']
export const SectionsTeamSectionOne: typeof import("../components/sections/TeamSectionOne.vue")['default']
export const SectionsTeamSectionThree: typeof import("../components/sections/TeamSectionThree.vue")['default']
export const SectionsTeamSectionTwo: typeof import("../components/sections/TeamSectionTwo.vue")['default']
export const SectionsTestimonialSectionOne: typeof import("../components/sections/TestimonialSectionOne.vue")['default']
export const SectionsTestimonialSectionThree: typeof import("../components/sections/TestimonialSectionThree.vue")['default']
export const SectionsTestimonialSectionTwo: typeof import("../components/sections/TestimonialSectionTwo.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyBackToTop: LazyComponent<typeof import("../components/BackToTop.vue")['default']>
export const LazyBreadcrumb: LazyComponent<typeof import("../components/Breadcrumb.vue")['default']>
export const LazyMarqueeText: LazyComponent<typeof import("../components/MarqueeText.vue")['default']>
export const LazyMobileMenu: LazyComponent<typeof import("../components/MobileMenu.vue")['default']>
export const LazyMouseCursor: LazyComponent<typeof import("../components/MouseCursor.vue")['default']>
export const LazyNavMenu: LazyComponent<typeof import("../components/NavMenu.vue")['default']>
export const LazyOffcanvas: LazyComponent<typeof import("../components/Offcanvas.vue")['default']>
export const LazyPreloader: LazyComponent<typeof import("../components/Preloader.vue")['default']>
export const LazyScrollCounter: LazyComponent<typeof import("../components/ScrollCounter.vue")['default']>
export const LazyFooterOne: LazyComponent<typeof import("../components/footer/FooterOne.vue")['default']>
export const LazyFooterThree: LazyComponent<typeof import("../components/footer/FooterThree.vue")['default']>
export const LazyFooterTwo: LazyComponent<typeof import("../components/footer/FooterTwo.vue")['default']>
export const LazyHeaderOne: LazyComponent<typeof import("../components/header/HeaderOne.vue")['default']>
export const LazyHeaderThree: LazyComponent<typeof import("../components/header/HeaderThree.vue")['default']>
export const LazyHeaderTwo: LazyComponent<typeof import("../components/header/HeaderTwo.vue")['default']>
export const LazySectionsAboutSectionFour: LazyComponent<typeof import("../components/sections/AboutSectionFour.vue")['default']>
export const LazySectionsAboutSectionOne: LazyComponent<typeof import("../components/sections/AboutSectionOne.vue")['default']>
export const LazySectionsAboutSectionThree: LazyComponent<typeof import("../components/sections/AboutSectionThree.vue")['default']>
export const LazySectionsAboutSectionTwo: LazyComponent<typeof import("../components/sections/AboutSectionTwo.vue")['default']>
export const LazySectionsBrandSectionOne: LazyComponent<typeof import("../components/sections/BrandSectionOne.vue")['default']>
export const LazySectionsCheckoutSection: LazyComponent<typeof import("../components/sections/CheckoutSection.vue")['default']>
export const LazySectionsChooseUsSectionTwo: LazyComponent<typeof import("../components/sections/ChooseUsSectionTwo.vue")['default']>
export const LazySectionsContactSection: LazyComponent<typeof import("../components/sections/ContactSection.vue")['default']>
export const LazySectionsContactSectionThree: LazyComponent<typeof import("../components/sections/ContactSectionThree.vue")['default']>
export const LazySectionsContactSectionTwo: LazyComponent<typeof import("../components/sections/ContactSectionTwo.vue")['default']>
export const LazySectionsContactUsSectionOne: LazyComponent<typeof import("../components/sections/ContactUsSectionOne.vue")['default']>
export const LazySectionsCtaBannerSection: LazyComponent<typeof import("../components/sections/CtaBannerSection.vue")['default']>
export const LazySectionsCtaSectionOne: LazyComponent<typeof import("../components/sections/CtaSectionOne.vue")['default']>
export const LazySectionsCtaSectionThree: LazyComponent<typeof import("../components/sections/CtaSectionThree.vue")['default']>
export const LazySectionsError404Section: LazyComponent<typeof import("../components/sections/Error404Section.vue")['default']>
export const LazySectionsFaqSection: LazyComponent<typeof import("../components/sections/FaqSection.vue")['default']>
export const LazySectionsFaqSectionFour: LazyComponent<typeof import("../components/sections/FaqSectionFour.vue")['default']>
export const LazySectionsFaqSectionThree: LazyComponent<typeof import("../components/sections/FaqSectionThree.vue")['default']>
export const LazySectionsHeroSectionOne: LazyComponent<typeof import("../components/sections/HeroSectionOne.vue")['default']>
export const LazySectionsHeroSectionThree: LazyComponent<typeof import("../components/sections/HeroSectionThree.vue")['default']>
export const LazySectionsHeroSectionTwo: LazyComponent<typeof import("../components/sections/HeroSectionTwo.vue")['default']>
export const LazySectionsHowWorkSectionOne: LazyComponent<typeof import("../components/sections/HowWorkSectionOne.vue")['default']>
export const LazySectionsMarqueeSectionOne: LazyComponent<typeof import("../components/sections/MarqueeSectionOne.vue")['default']>
export const LazySectionsMarqueeSectionThree: LazyComponent<typeof import("../components/sections/MarqueeSectionThree.vue")['default']>
export const LazySectionsMarqueeSectionTwo: LazyComponent<typeof import("../components/sections/MarqueeSectionTwo.vue")['default']>
export const LazySectionsNewsDetailsSection: LazyComponent<typeof import("../components/sections/NewsDetailsSection.vue")['default']>
export const LazySectionsNewsSectionOne: LazyComponent<typeof import("../components/sections/NewsSectionOne.vue")['default']>
export const LazySectionsNewsSectionThree: LazyComponent<typeof import("../components/sections/NewsSectionThree.vue")['default']>
export const LazySectionsNewsSectionTwo: LazyComponent<typeof import("../components/sections/NewsSectionTwo.vue")['default']>
export const LazySectionsNewsStandardSection: LazyComponent<typeof import("../components/sections/NewsStandardSection.vue")['default']>
export const LazySectionsPersonalSection: LazyComponent<typeof import("../components/sections/PersonalSection.vue")['default']>
export const LazySectionsPricingSectionOne: LazyComponent<typeof import("../components/sections/PricingSectionOne.vue")['default']>
export const LazySectionsPricingSectionTwo: LazyComponent<typeof import("../components/sections/PricingSectionTwo.vue")['default']>
export const LazySectionsProjectDetailsSection: LazyComponent<typeof import("../components/sections/ProjectDetailsSection.vue")['default']>
export const LazySectionsProjectDetailsSectionTwo: LazyComponent<typeof import("../components/sections/ProjectDetailsSectionTwo.vue")['default']>
export const LazySectionsProjectSectionOne: LazyComponent<typeof import("../components/sections/ProjectSectionOne.vue")['default']>
export const LazySectionsProjectSectionThree: LazyComponent<typeof import("../components/sections/ProjectSectionThree.vue")['default']>
export const LazySectionsProjectSectionTwo: LazyComponent<typeof import("../components/sections/ProjectSectionTwo.vue")['default']>
export const LazySectionsSearchSection: LazyComponent<typeof import("../components/sections/SearchSection.vue")['default']>
export const LazySectionsServiceDetailsSection: LazyComponent<typeof import("../components/sections/ServiceDetailsSection.vue")['default']>
export const LazySectionsServiceSection: LazyComponent<typeof import("../components/sections/ServiceSection.vue")['default']>
export const LazySectionsServiceSectionOne: LazyComponent<typeof import("../components/sections/ServiceSectionOne.vue")['default']>
export const LazySectionsServiceSectionThree: LazyComponent<typeof import("../components/sections/ServiceSectionThree.vue")['default']>
export const LazySectionsServiceSectionTwo: LazyComponent<typeof import("../components/sections/ServiceSectionTwo.vue")['default']>
export const LazySectionsServicesDomain: LazyComponent<typeof import("../components/sections/ServicesDomain.vue")['default']>
export const LazySectionsShopCartSection: LazyComponent<typeof import("../components/sections/ShopCartSection.vue")['default']>
export const LazySectionsShopDetailsSection: LazyComponent<typeof import("../components/sections/ShopDetailsSection.vue")['default']>
export const LazySectionsShopPageSection: LazyComponent<typeof import("../components/sections/ShopPageSection.vue")['default']>
export const LazySectionsTeamDetailsSection: LazyComponent<typeof import("../components/sections/TeamDetailsSection.vue")['default']>
export const LazySectionsTeamSection: LazyComponent<typeof import("../components/sections/TeamSection.vue")['default']>
export const LazySectionsTeamSectionOne: LazyComponent<typeof import("../components/sections/TeamSectionOne.vue")['default']>
export const LazySectionsTeamSectionThree: LazyComponent<typeof import("../components/sections/TeamSectionThree.vue")['default']>
export const LazySectionsTeamSectionTwo: LazyComponent<typeof import("../components/sections/TeamSectionTwo.vue")['default']>
export const LazySectionsTestimonialSectionOne: LazyComponent<typeof import("../components/sections/TestimonialSectionOne.vue")['default']>
export const LazySectionsTestimonialSectionThree: LazyComponent<typeof import("../components/sections/TestimonialSectionThree.vue")['default']>
export const LazySectionsTestimonialSectionTwo: LazyComponent<typeof import("../components/sections/TestimonialSectionTwo.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
