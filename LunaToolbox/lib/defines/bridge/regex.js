const regex = Object.freeze( {
    csprojVersion: /(?<=packages\\Bridge\.(Core|Min)\.)([a-zA-Z0-9-.]*)[^\\]/g,
    nugetConfigVersion: /(?<=id="Bridge\.(Min|Core)" version=")([a-zA-Z0-9-.]*)[^"]/g,
    assemblyInformationalVersion: /(?<=AssemblyInformationalVersion\(")([a-zA-Z0-9-.]*)[^"]/g,
    defaultPackageVersion: /(?<=<DefaultPackageVersion>)([a-zA-Z0-9-.]*)[^<]/g,
    nugetConfigPackagesPath: /(?<=<add key="Luna" value=")([a-zA-Z0-9-./]*)[^"]/g,
} );

module.exports = {
    regex,
};
