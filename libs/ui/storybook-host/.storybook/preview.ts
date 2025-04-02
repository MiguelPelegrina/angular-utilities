import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideTransloco, TranslocoService } from '@jsverse/transloco';
import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  Preview,
} from '@storybook/angular';
import { TranslocoHttpLoader } from '../transloco-loader';
import { LocaleManagerComponent } from '../locale-manager/locale-manager.component';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideHttpClient(),
        provideTransloco({
          config: {
            availableLangs: ['en', 'es', 'de'],
            defaultLang: 'en',
            fallbackLang: 'en',
            reRenderOnLangChange: true,
            prodMode: false,
          },
          loader: TranslocoHttpLoader,
        }),
      ],
    }),
    moduleMetadata({
      imports: [LocaleManagerComponent],
      providers: [HttpClient, TranslocoService],
    }),
    (story, context) => {
      const { locale } = context.globals;

      return componentWrapperDecorator(LocaleManagerComponent, { locale })(
        story,
        context
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

// This is the setup for storybook menu bar dropdown to change the locale
export const globalTypes = {
  locale: {
    name: 'Locale',
    title: 'Locale',
    description: 'Select the language',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        // in here, value should match to the generated language file name without '.json' part.
        { value: 'en', title: 'English' },
        { value: 'es', title: 'Spanish' },
        { value: 'de', title: 'German' },
      ],
    },
  },
};

export default preview;
