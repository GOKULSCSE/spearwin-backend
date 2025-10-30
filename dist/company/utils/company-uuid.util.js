"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShortForm = generateShortForm;
exports.generateCompanyUuid = generateCompanyUuid;
exports.isValidCompanyUuid = isValidCompanyUuid;
exports.extractShortFormFromUuid = extractShortFormFromUuid;
function generateShortForm(companyName) {
    if (!companyName || companyName.trim().length === 0) {
        throw new Error('Company name is required');
    }
    const cleanName = companyName.trim().toLowerCase();
    const suffixes = [
        'inc', 'inc.', 'corporation', 'corp', 'corp.', 'llc', 'ltd', 'ltd.',
        'limited', 'company', 'co', 'co.', 'group', 'technologies', 'tech',
        'solutions', 'services', 'systems', 'software', 'international',
        'global', 'enterprises', 'holdings', 'partners', 'associates'
    ];
    let processedName = cleanName;
    for (const suffix of suffixes) {
        const regex = new RegExp(`\\b${suffix}\\b`, 'gi');
        processedName = processedName.replace(regex, '').trim();
    }
    const words = processedName.split(/\s+/).filter(word => word.length > 0);
    if (words.length === 0) {
        return cleanName.substring(0, 4).replace(/[^a-z]/g, '');
    }
    if (words.length === 1) {
        return words[0].substring(0, 4).replace(/[^a-z]/g, '');
    }
    if (words.length === 2) {
        return words.map(word => word.substring(0, 2)).join('').replace(/[^a-z]/g, '');
    }
    const shortForm = words.map(word => word.charAt(0)).join('').substring(0, 4);
    return shortForm.replace(/[^a-z]/g, '');
}
function generateCompanyUuid(companyName, existingUuids = []) {
    const shortForm = generateShortForm(companyName);
    const pattern = new RegExp(`^spear-${shortForm}-(\\d+)$`);
    let maxNumber = 0;
    existingUuids.forEach(uuid => {
        const match = uuid.match(pattern);
        if (match) {
            const number = parseInt(match[1], 10);
            if (number > maxNumber) {
                maxNumber = number;
            }
        }
    });
    const nextNumber = maxNumber + 1;
    const paddedNumber = nextNumber.toString().padStart(3, '0');
    return `spear-${shortForm}-${paddedNumber}`;
}
function isValidCompanyUuid(uuid) {
    const pattern = /^spear-[a-z]+-\d{3}$/;
    return pattern.test(uuid);
}
function extractShortFormFromUuid(uuid) {
    const match = uuid.match(/^spear-([a-z]+)-\d{3}$/);
    return match ? match[1] : null;
}
//# sourceMappingURL=company-uuid.util.js.map