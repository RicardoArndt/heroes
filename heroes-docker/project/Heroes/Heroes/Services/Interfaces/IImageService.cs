using System.Collections.Generic;

namespace Heroes.Services.Interfaces
{
    public interface IImageService
    {
        void SendImage(string image, string imageId);
        string ReadImage(string imageId);
        void DeleteImage(string imageId);
    }
}
