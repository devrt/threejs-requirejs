define('THREE_global', ['https://cdn.rawgit.com/mrdoob/three.js/r83/build/three.min.js'], function(THREE) {
    // three.js modules require global THREE:
    //  https://github.com/mrdoob/three.js/issues/9602#issuecomment-253678783
    window.THREE = THREE;
    return THREE;
});
require.config({
    "paths": {
        "3MFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/3MFLoader",
        "AMFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/AMFLoader",
        "AWDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/AWDLoader",
        "AssimpJSONLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/AssimpJSONLoader",
        "AssimpLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/AssimpLoader",
        "BVHLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/BVHLoader",
        "BabylonLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/BabylonLoader",
        "BinaryLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/BinaryLoader",
        "ColladaLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/ColladaLoader",
        "ColladaLoader2": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/ColladaLoader2",
        "DDSLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/DDSLoader",
        "FBXLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/FBXLoader",
        "GLTFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/GLTFLoader",
        "HDRCubeTextureLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/HDRCubeTextureLoader",
        "KMZLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/KMZLoader",
        "MD2Loader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/MD2Loader",
        "MMDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/MMDLoader",
        "MTLLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/MTLLoader",
        "NRRDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/NRRDLoader",
        "OBJLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/OBJLoader",
        "PCDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/PCDLoader",
        "PDBLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/PDBLoader",
        "PLYLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/PLYLoader",
        "PVRLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/PVRLoader",
        "PlayCanvasLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/PlayCanvasLoader",
        "RGBELoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/RGBELoader",
        "STLLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/STLLoader",
        "SVGLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/SVGLoader",
        "TGALoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/TGALoader",
        "TTFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/TTFLoader",
        "UTF8Loader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/UTF8Loader",
        "VRMLLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/VRMLLoader",
        "VTKLoader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/loaders/VTKLoader",
        "DeviceOrientationControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/DeviceOrientationControls",
        "DragControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/DragControls",
        "EditorControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/EditorControls",
        "FirstPersonControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/FirstPersonControls",
        "FlyControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/FlyControls",
        "OrbitControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/OrbitControls",
        "OrthographicTrackballControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/OrthographicTrackballControls",
        "PointerLockControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/PointerLockControls",
        "TrackballControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/TrackballControls",
        "TransformControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/TransformControls",
        "VRControls": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/controls/VRControls",
        "CSS2DRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/renderers/CSS2DRenderer",
        "CSS3DRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/renderers/CSS3DRenderer",
        "CanvasRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/renderers/CanvasRenderer",
        "Projector": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/renderers/Projector",
        "RaytracingRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/renderers/RaytracingRenderer",
        "RaytracingWorker": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/renderers/RaytracingWorker",
        "SVGRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/renderers/SVGRenderer",
        "SoftwareRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/renderers/SoftwareRenderer",
        "WebGLDeferredRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/renderers/WebGLDeferredRenderer",
        "BasicShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/BasicShader",
        "BleachBypassShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/BleachBypassShader",
        "BlendShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/BlendShader",
        "BokehShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/BokehShader",
        "BokehShader2": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/BokehShader2",
        "BrightnessContrastShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/BrightnessContrastShader",
        "ColorCorrectionShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/ColorCorrectionShader",
        "ColorifyShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/ColorifyShader",
        "ConvolutionShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/ConvolutionShader",
        "CopyShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/CopyShader",
        "DOFMipMapShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/DOFMipMapShader",
        "DigitalGlitch": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/DigitalGlitch",
        "DotScreenShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/DotScreenShader",
        "EdgeShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/EdgeShader",
        "EdgeShader2": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/EdgeShader2",
        "FXAAShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/FXAAShader",
        "FilmShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/FilmShader",
        "FocusShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/FocusShader",
        "FresnelShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/FresnelShader",
        "GammaCorrectionShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/GammaCorrectionShader",
        "HorizontalBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/HorizontalBlurShader",
        "HorizontalTiltShiftShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/HorizontalTiltShiftShader",
        "HueSaturationShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/HueSaturationShader",
        "KaleidoShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/KaleidoShader",
        "LuminosityHighPassShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/LuminosityHighPassShader",
        "LuminosityShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/LuminosityShader",
        "MirrorShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/MirrorShader",
        "NormalMapShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/NormalMapShader",
        "OceanShaders": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/OceanShaders",
        "ParallaxShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/ParallaxShader",
        "RGBShiftShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/RGBShiftShader",
        "SMAAShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/SMAAShader",
        "SSAOShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/SSAOShader",
        "SepiaShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/SepiaShader",
        "TechnicolorShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/TechnicolorShader",
        "ToneMapShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/ToneMapShader",
        "TriangleBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/TriangleBlurShader",
        "UnpackDepthRGBAShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/UnpackDepthRGBAShader",
        "VerticalBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/VerticalBlurShader",
        "VerticalTiltShiftShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/VerticalTiltShiftShader",
        "VignetteShader": "https://cdn.rawgit.com/mrdoob/three.js/r83/examples/js/shaders/VignetteShader"
    },
    "shim": {
        "3MFLoader": {
            "deps": ["THREE_global"]
        },
        "AMFLoader": {
            "deps": ["THREE_global"]
        },
        "AWDLoader": {
            "deps": ["THREE_global"]
        },
        "AssimpJSONLoader": {
            "deps": ["THREE_global"]
        },
        "AssimpLoader": {
            "deps": ["THREE_global"]
        },
        "BVHLoader": {
            "deps": ["THREE_global"]
        },
        "BabylonLoader": {
            "deps": ["THREE_global"]
        },
        "BinaryLoader": {
            "deps": ["THREE_global"]
        },
        "ColladaLoader": {
            "deps": ["THREE_global"]
        },
        "ColladaLoader2": {
            "deps": ["THREE_global"]
        },
        "DDSLoader": {
            "deps": ["THREE_global"]
        },
        "FBXLoader": {
            "deps": ["THREE_global"]
        },
        "GLTFLoader": {
            "deps": ["THREE_global"]
        },
        "HDRCubeTextureLoader": {
            "deps": ["THREE_global"]
        },
        "KMZLoader": {
            "deps": ["THREE_global"]
        },
        "MD2Loader": {
            "deps": ["THREE_global"]
        },
        "MMDLoader": {
            "deps": ["THREE_global"]
        },
        "MTLLoader": {
            "deps": ["THREE_global"]
        },
        "NRRDLoader": {
            "deps": ["THREE_global"]
        },
        "OBJLoader": {
            "deps": ["THREE_global"]
        },
        "PCDLoader": {
            "deps": ["THREE_global"]
        },
        "PDBLoader": {
            "deps": ["THREE_global"]
        },
        "PLYLoader": {
            "deps": ["THREE_global"]
        },
        "PVRLoader": {
            "deps": ["THREE_global"]
        },
        "PlayCanvasLoader": {
            "deps": ["THREE_global"]
        },
        "RGBELoader": {
            "deps": ["THREE_global"]
        },
        "STLLoader": {
            "deps": ["THREE_global"]
        },
        "SVGLoader": {
            "deps": ["THREE_global"]
        },
        "TGALoader": {
            "deps": ["THREE_global"]
        },
        "TTFLoader": {
            "deps": ["THREE_global"]
        },
        "UTF8Loader": {
            "deps": ["THREE_global"]
        },
        "VRMLLoader": {
            "deps": ["THREE_global"]
        },
        "VTKLoader": {
            "deps": ["THREE_global"]
        },
        "DeviceOrientationControls": {
            "deps": ["THREE_global"]
        },
        "DragControls": {
            "deps": ["THREE_global"]
        },
        "EditorControls": {
            "deps": ["THREE_global"]
        },
        "FirstPersonControls": {
            "deps": ["THREE_global"]
        },
        "FlyControls": {
            "deps": ["THREE_global"]
        },
        "OrbitControls": {
            "deps": ["THREE_global"]
        },
        "OrthographicTrackballControls": {
            "deps": ["THREE_global"]
        },
        "PointerLockControls": {
            "deps": ["THREE_global"]
        },
        "TrackballControls": {
            "deps": ["THREE_global"]
        },
        "TransformControls": {
            "deps": ["THREE_global"]
        },
        "VRControls": {
            "deps": ["THREE_global"]
        },
        "CSS2DRenderer": {
            "deps": ["THREE_global"]
        },
        "CSS3DRenderer": {
            "deps": ["THREE_global"]
        },
        "CanvasRenderer": {
            "deps": ["THREE_global"]
        },
        "Projector": {
            "deps": ["THREE_global"]
        },
        "RaytracingRenderer": {
            "deps": ["THREE_global"]
        },
        "RaytracingWorker": {
            "deps": ["THREE_global"]
        },
        "SVGRenderer": {
            "deps": ["THREE_global"]
        },
        "SoftwareRenderer": {
            "deps": ["THREE_global"]
        },
        "WebGLDeferredRenderer": {
            "deps": ["THREE_global"]
        },
        "BasicShader": {
            "deps": ["THREE_global"]
        },
        "BleachBypassShader": {
            "deps": ["THREE_global"]
        },
        "BlendShader": {
            "deps": ["THREE_global"]
        },
        "BokehShader": {
            "deps": ["THREE_global"]
        },
        "BokehShader2": {
            "deps": ["THREE_global"]
        },
        "BrightnessContrastShader": {
            "deps": ["THREE_global"]
        },
        "ColorCorrectionShader": {
            "deps": ["THREE_global"]
        },
        "ColorifyShader": {
            "deps": ["THREE_global"]
        },
        "ConvolutionShader": {
            "deps": ["THREE_global"]
        },
        "CopyShader": {
            "deps": ["THREE_global"]
        },
        "DOFMipMapShader": {
            "deps": ["THREE_global"]
        },
        "DigitalGlitch": {
            "deps": ["THREE_global"]
        },
        "DotScreenShader": {
            "deps": ["THREE_global"]
        },
        "EdgeShader": {
            "deps": ["THREE_global"]
        },
        "EdgeShader2": {
            "deps": ["THREE_global"]
        },
        "FXAAShader": {
            "deps": ["THREE_global"]
        },
        "FilmShader": {
            "deps": ["THREE_global"]
        },
        "FocusShader": {
            "deps": ["THREE_global"]
        },
        "FresnelShader": {
            "deps": ["THREE_global"]
        },
        "GammaCorrectionShader": {
            "deps": ["THREE_global"]
        },
        "HorizontalBlurShader": {
            "deps": ["THREE_global"]
        },
        "HorizontalTiltShiftShader": {
            "deps": ["THREE_global"]
        },
        "HueSaturationShader": {
            "deps": ["THREE_global"]
        },
        "KaleidoShader": {
            "deps": ["THREE_global"]
        },
        "LuminosityHighPassShader": {
            "deps": ["THREE_global"]
        },
        "LuminosityShader": {
            "deps": ["THREE_global"]
        },
        "MirrorShader": {
            "deps": ["THREE_global"]
        },
        "NormalMapShader": {
            "deps": ["THREE_global"]
        },
        "OceanShaders": {
            "deps": ["THREE_global"]
        },
        "ParallaxShader": {
            "deps": ["THREE_global"]
        },
        "RGBShiftShader": {
            "deps": ["THREE_global"]
        },
        "SMAAShader": {
            "deps": ["THREE_global"]
        },
        "SSAOShader": {
            "deps": ["THREE_global"]
        },
        "SepiaShader": {
            "deps": ["THREE_global"]
        },
        "TechnicolorShader": {
            "deps": ["THREE_global"]
        },
        "ToneMapShader": {
            "deps": ["THREE_global"]
        },
        "TriangleBlurShader": {
            "deps": ["THREE_global"]
        },
        "UnpackDepthRGBAShader": {
            "deps": ["THREE_global"]
        },
        "VerticalBlurShader": {
            "deps": ["THREE_global"]
        },
        "VerticalTiltShiftShader": {
            "deps": ["THREE_global"]
        },
        "VignetteShader": {
            "deps": ["THREE_global"]
        }
    }
});