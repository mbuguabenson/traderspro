// ⚠️ PLACEHOLDER LOGO - REPLACE WITH YOUR BRAND ⚠️
// This is a generic template placeholder
// Replace this SVG with your own brand logo
// See: src/components/layout/app-logo/README.md for instructions

type TBrandLogoProps = {
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
};

export const BrandLogo = ({
    width = 160,
    height = 32,
    fill = 'currentColor',
    className = ''
}: TBrandLogoProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 160 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="TradersHub Logo"
        >
            {/* Sleek icon representing a hub/trading nodes */}
            <g transform="translate(4, 4)">
                {/* Node connections */}
                <path d="M6 12L12 6M12 6L18 12M12 6V18" stroke="#2e3192" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Hub circles */}
                <circle cx="6" cy="12" r="2.5" fill={fill} />
                <circle cx="18" cy="12" r="2.5" fill={fill} />
                <circle cx="12" cy="6" r="2.5" fill="#2e3192" />
                <circle cx="12" cy="18" r="2.5" fill="#2e3192" />
            </g>

            {/* "Traders" Text */}
            <text
                x="34"
                y="21"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="18"
                fontWeight="700"
                fill={fill}
                letterSpacing="0.2"
            >
                Traders
            </text>

            {/* "Hub" Text */}
            <text
                x="105"
                y="21"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="18"
                fontWeight="800"
                fill="#2e3192"
                letterSpacing="0.2"
            >
                Hub
            </text>
        </svg>
    );
};

// CUSTOMIZATION OPTIONS:
//
// Option 1: Replace SVG inline (Recommended for vector logos)
// --------------------------------------------------------
// Delete the placeholder SVG above and paste your logo's SVG code:
//
// export const BrandLogo = ({ width = 120, height = 32, fill = 'currentColor' }) => {
//     return (
//         <svg width={width} height={height} viewBox="0 0 120 32" fill="none">
//             {/* Your logo's SVG paths here */}
//             <path d="M..." fill={fill} />
//             <path d="M..." fill={fill} />
//         </svg>
//     );
// };
//
//
// Option 2: Use image file (For PNG/JPG logos)
// ---------------------------------------------
// 1. Place your logo in: public/logo.svg (or .png)
// 2. Replace this component with:
//
// export const BrandLogo = ({ width = 120, height = 32, className = '' }: TBrandLogoProps) => {
//     return (
//         <img
//             src="/logo.svg"
//             alt="Brand Logo"
//             width={width}
//             height={height}
//             className={className}
//         />
//     );
// };
//
//
// Option 3: Use external URL
// ---------------------------
// export const BrandLogo = ({ width = 120, height = 32 }: TBrandLogoProps) => {
//     return (
//         <img
//             src="https://yourdomain.com/logo.svg"
//             alt="Brand Logo"
//             width={width}
//             height={height}
//         />
//     );
// };
//
// For detailed instructions, see: src/components/layout/app-logo/README.md
