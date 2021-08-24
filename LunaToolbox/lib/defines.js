/* eslint-disable max-len */

const path = require( 'path' );

const Messages = Object.freeze({
    bridgeVersion: 'Enter new version for Bridge or press enter to stay on current $currentBridgeVersion (postfix \'-luna\' will be added automatically)',
    bridgeVersionValidationError: 'Please, enter valid version number (ex. "17.9.11")'
});

const Regex = Object.freeze({
    csprojVersion: /(?<=packages\\Bridge\.(Core|Min)\.)([a-zA-Z0-9-.]*)[^\\]/g,
    nugetConfigVersion: /(?<=id="Bridge\.(Min|Core)" version=")([a-zA-Z0-9-.]*)[^"]/g,
    assemblyInformationalVersion: /(?<=AssemblyInformationalVersion\(")([a-zA-Z0-9-.]*)[^"]/g,
    defaultPackageVersion: /(?<=<DefaultPackageVersion>)([a-zA-Z0-9-.]*)[^<]/g,
    nugetConfigPackagesPath: /(?<=<add key="Luna" value=")([a-zA-Z0-9-./]*)[^"]/g,
});

class Paths {
    constructor({ lunaPath, bridgePath }) {
        this.lunaPath = lunaPath;
        this.bridgePath = bridgePath;

        this.Bridge = {
            bridgeSln: path.join( this.bridgePath, 'Bridge.sln' ),
            assemblyInfo: path.join( this.bridgePath, '.build/common/CommonAssemblyInfo.cs' ),
            nugetBuildPackageTargets: path.join( this.bridgePath, '.build/common/NuGet.Build.Package.targets' ),
            nugetTempDir: path.join( this.bridgePath, '.build/packages/' ),
            compiledNugetDirs: [
                path.join( this.bridgePath, 'Compiler/Build/bin/Release/' ),
                path.join( this.bridgePath, 'Compiler/Contract/bin/Release/' ),
                path.join( this.bridgePath, 'Compiler/Translator/bin/Release/' ),
                path.join( this.bridgePath, 'PostBuild/bin/Release/' ),
            ],
        };
        this.LunaCompiler = {
            lunaCompiler: path.join( this.lunaPath, 'pipeline/templates/LunaCompiler' ),
            lunaCompilerSln: path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/LunaCompiler.sln' ),
            lunaCompilerPackages: path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/packages' ),
            nugetConfig: path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/nuget.config' ),
            packagesToCleanUp: ['Bridge.Core', 'Bridge.Min'],
            csprojs: [
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Scripts/Scripts.csproj' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Scripts/Scripts.csproj.template' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/UnityEngine/UnityEngine.csproj' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.ui/1.2.1/1.2.1.csproj' ),
            ],
            packagesConfigs: [
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Scripts/packages.config' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/UnityEngine/packages.config' ),
            ],
        };
        this.Vendor = {
            vendorSln: path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor.sln' ),
            csprojs: [
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.dg.tweening/1.2.235/DOTween 1.2.235.csproj' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.ui/1.2.1/1.2.1.csproj' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.textmeshpro/1.3.0/1.3.0.csproj' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.textmeshpro/2.0.0/2.0.0.csproj' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.textmeshpro/3.0.0/3.0.0.csproj' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.cinemachine/2.2.9/2.2.9.csproj' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.cinemachine/2.3.4/2.3.4.csproj' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.cinemachine/2.4.0/2.4.0.csproj' ),
            ],
            packagesConfigs: [
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.cinemachine/2.2.9/packages.config' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.cinemachine/2.3.4/packages.config' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.cinemachine/2.4.0/packages.config' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.textmeshpro/1.3.0/packages.config' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.textmeshpro/2.0.0/packages.config' ),
                path.join( this.lunaPath, 'pipeline/templates/LunaCompiler/Vendor/com.unity.textmeshpro/3.0.0/packages.config' ),
            ],
        };
    }
}

module.exports = {
    Paths,
    Regex,
    Messages,
};
