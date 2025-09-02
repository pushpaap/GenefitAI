import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Dna, Loader } from 'lucide-react';

interface GeneticUploadProps {
  onUploadComplete: () => void;
}

const GeneticUpload: React.FC<GeneticUploadProps> = ({ onUploadComplete }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    setFileName(file.name);
    setUploadStatus('uploading');
    
    // Simulate upload and processing
    setTimeout(() => {
      setUploadStatus('success');
      setTimeout(() => {
        onUploadComplete();
      }, 1500);
    }, 3000);
  };

  const supportedFormats = [
    { ext: '.vcf', desc: 'Variant Call Format' },
    { ext: '.fasta', desc: 'FASTA Sequence' },
    { ext: '.fastq', desc: 'FASTQ Format' },
    { ext: '.23andme', desc: '23andMe Raw Data' },
    { ext: '.ancestry', desc: 'AncestryDNA Data' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Dna className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Upload Your Genetic Data</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Securely upload your genetic information to begin your personalized health analysis, 
          tumor screening, and DNA sonification journey.
        </p>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div
          className={`
            relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300
            ${dragActive 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'
            }
            ${uploadStatus === 'success' ? 'border-green-400 bg-green-50' : ''}
            ${uploadStatus === 'error' ? 'border-red-400 bg-red-50' : ''}
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileInput}
            accept=".vcf,.fasta,.fastq,.txt,.csv"
            disabled={uploadStatus === 'uploading' || uploadStatus === 'success'}
          />
          
          <div className="space-y-4">
            {uploadStatus === 'idle' && (
              <>
                <Upload className="w-12 h-12 text-slate-400 mx-auto" />
                <div>
                  <p className="text-lg font-semibold text-slate-700">
                    Drop your genetic data file here
                  </p>
                  <p className="text-slate-500">or click to browse files</p>
                </div>
              </>
            )}
            
            {uploadStatus === 'uploading' && (
              <>
                <Loader className="w-12 h-12 text-blue-600 mx-auto animate-spin" />
                <div>
                  <p className="text-lg font-semibold text-blue-700">Processing {fileName}</p>
                  <p className="text-slate-500">Analyzing genetic sequences...</p>
                </div>
              </>
            )}
            
            {uploadStatus === 'success' && (
              <>
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <div>
                  <p className="text-lg font-semibold text-green-700">Upload Successful!</p>
                  <p className="text-slate-500">Redirecting to your dashboard...</p>
                </div>
              </>
            )}
            
            {uploadStatus === 'error' && (
              <>
                <AlertCircle className="w-12 h-12 text-red-600 mx-auto" />
                <div>
                  <p className="text-lg font-semibold text-red-700">Upload Failed</p>
                  <p className="text-slate-500">Please try again with a valid file</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Supported Formats */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-blue-600" />
          Supported File Formats
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportedFormats.map((format, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">{format.ext.slice(1).toUpperCase()}</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">{format.ext}</p>
                <p className="text-sm text-slate-500">{format.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Privacy Notice:</strong> All genetic data is encrypted and processed securely. 
            Your information is never shared and you maintain full control over your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneticUpload;