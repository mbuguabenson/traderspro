import config_data from '../../../../../brand.config.json';

type TPlatform = {
    name: string;
    logo: string;
};

const isDomainAllowed = (domain_name: string) => {
    // This regex will match any official deriv production and testing domain names, plus traderspro and aquatrades domains.
    // Allowed domains: localhost:8443, localhost:8444, pages.dev, binary, deriv, traderspro, and aquatrades.
    return /^(((.*)\.)?(localhost:8443|localhost:8444|pages.dev|binary\.(sx|com)|deriv\.(com|me|be|dev)|(traderspro|aquatrades)\.(vercel\.app|com)))$/.test(domain_name);
};

export const getBrandWebsiteName = () => {
    return config_data.domain_name;
};

export const getPlatformConfig = (): TPlatform => {
    // Clone config to prevent mutating the shared global import
    const allowed_config_data = { ...config_data.platform };

    if (!isDomainAllowed(window.location.host)) {
        // Keep logo as an empty object structure to prevent TypeError when properties are accessed
        allowed_config_data.logo = {} as any;
    }

    return allowed_config_data as any;
};
