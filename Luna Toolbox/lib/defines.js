const Paths = Object.freeze({
	Bridge: {
		bridgeSln: '../Bridge/Bridge.sln',
		assemblyInfo: '../Bridge/.build/common/CommonAssemblyInfo.cs',
		nugetBuildPackageTargets: '../Bridge/.build/common/NuGet.Build.Package.targets',
		nugetTempDir: '../Bridge/.build/packages/',
		compiledNugetDirs: [
			'../Bridge/Compiler/Build/bin/Release/',
			'../Bridge/Compiler/Contract/bin/Release/',
			'../Bridge/Compiler/Translator/bin/Release/',
			'../Bridge/PostBuild/bin/Release/',
		]
	},
	LunaCompiler: {
		lunaCompiler: './pipeline/templates/LunaCompiler',
		lunaCompilerSln: './pipeline/templates/LunaCompiler/LunaCompiler.sln',
		lunaCompilerPackages: './pipeline/templates/LunaCompiler/packages',
		packagesToCleanUp: [
			'Bridge.Core',
			'Bridge.Min',
		],
		csprojs: [
			'./pipeline/templates/LunaCompiler/Scripts/Scripts.csproj',
			'./pipeline/templates/LunaCompiler/Scripts/Scripts.csproj.template',
			'./pipeline/templates/LunaCompiler/UnityEngine/UnityEngine.csproj',
			'./pipeline/templates/LunaCompiler/Vendor/com.unity.ui/1.2.1/1.2.1.csproj',
		],
		nugetConfigs: [
			'./pipeline/templates/LunaCompiler/Scripts/packages.config',
			'./pipeline/templates/LunaCompiler/UnityEngine/packages.config',
		]
	}
});


const Regex = Object.freeze({
	csprojVersion: /(?<=packages\\Bridge\.(Core|Min)\.)([a-zA-Z0-9-\.]*)[^\\]/g,
	configVersion: /(?<=id=\"Bridge\.(Min|Core)\" version=\")([a-zA-Z0-9-\.]*)[^\"]/g,
	assemblyInformationalVersion: /(?<=AssemblyInformationalVersion\(\")([a-zA-Z0-9-\.]*)[^\"]/g,
	defaultPackageVersion: /(?<=<DefaultPackageVersion>)([a-zA-Z0-9-\.]*)[^\<]/g
});

module.exports = {
	Paths,
	Regex
};
